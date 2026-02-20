'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import PhilosopherCard from './PhilosopherCard';
import { philosophers } from '@/data/philosophers';
import { eras } from '@/data/eras';
import { branches } from '@/data/branches';
import { schools } from '@/data/schools';

export default function PhilosophersClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterEra, setFilterEra] = useState('all');
  const [filterBranch, setFilterBranch] = useState('all');
  const [filterSchool, setFilterSchool] = useState('all');

  const filtered = useMemo(() => {
    return philosophers.filter((p) => {
      if (filterEra !== 'all' && p.era !== filterEra) return false;
      if (filterBranch !== 'all' && !p.branch.includes(filterBranch)) return false;
      if (filterSchool !== 'all' && !p.school.includes(filterSchool)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const searchable = [
          p.name,
          p.thesis,
          p.bio,
          ...p.works,
          ...p.arguments.map((a) => a.title + ' ' + a.desc),
        ]
          .join(' ')
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }, [searchQuery, filterEra, filterBranch, filterSchool]);

  const schoolOptions = schools.filter(
    (s) => philosophers.filter((p) => p.school.includes(s.id)).length >= 2
  );

  const hasFilters =
    searchQuery || filterEra !== 'all' || filterBranch !== 'all' || filterSchool !== 'all';

  const clearAll = () => {
    setSearchQuery('');
    setFilterEra('all');
    setFilterBranch('all');
    setFilterSchool('all');
  };

  const selectStyle: React.CSSProperties = {
    background: 'rgba(15,12,8,0.8)',
    border: '1px solid rgba(192,161,114,0.15)',
    color: '#b0a090',
    fontFamily: 'var(--font-crimson), serif',
    minWidth: '150px',
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-10">
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ color: '#c0a172', fontFamily: 'var(--font-playfair), serif' }}
        >
          Philosophers
        </h1>
        <p className="text-base max-w-2xl mx-auto" style={{ color: '#78909c' }}>
          Search, filter, and explore {philosophers.length} philosophers spanning 2,600 years of
          thought.
        </p>
      </div>

      {/* Filters */}
      <div
        className="flex flex-wrap gap-3 mb-8 p-5 rounded-2xl"
        style={{
          background: 'rgba(26,21,16,0.6)',
          border: '1px solid rgba(192,161,114,0.1)',
        }}
      >
        <div className="flex-1 relative" style={{ minWidth: '240px' }}>
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: '#78909c' }}
          />
          <input
            type="text"
            placeholder="Search philosophers, works, ideas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none"
            style={{
              background: 'rgba(15,12,8,0.8)',
              border: '1px solid rgba(192,161,114,0.15)',
              color: '#f4f4f4',
              fontFamily: 'var(--font-crimson), serif',
            }}
          />
        </div>

        <select
          value={filterEra}
          onChange={(e) => setFilterEra(e.target.value)}
          className="px-4 py-2.5 rounded-xl text-sm outline-none cursor-pointer"
          style={selectStyle}
        >
          <option value="all">All Eras</option>
          {eras.map((e) => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>

        <select
          value={filterBranch}
          onChange={(e) => setFilterBranch(e.target.value)}
          className="px-4 py-2.5 rounded-xl text-sm outline-none cursor-pointer"
          style={selectStyle}
        >
          <option value="all">All Branches</option>
          {branches.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>

        <select
          value={filterSchool}
          onChange={(e) => setFilterSchool(e.target.value)}
          className="px-4 py-2.5 rounded-xl text-sm outline-none cursor-pointer"
          style={selectStyle}
        >
          <option value="all">All Schools</option>
          {schoolOptions.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        {hasFilters && (
          <button
            onClick={clearAll}
            className="px-4 py-2.5 rounded-xl text-sm flex items-center gap-2"
            style={{
              color: '#c0a172',
              background: 'rgba(192,161,114,0.08)',
              border: '1px solid rgba(192,161,114,0.15)',
            }}
          >
            <X size={14} /> Clear
          </button>
        )}
      </div>

      <p className="text-sm mb-6" style={{ color: '#78909c' }}>
        Showing {filtered.length} of {philosophers.length} philosophers
        {filterEra !== 'all' && ` · ${eras.find((e) => e.id === filterEra)?.name}`}
        {filterBranch !== 'all' && ` · ${filterBranch}`}
        {filterSchool !== 'all' && ` · ${filterSchool}`}
      </p>

      {filtered.length > 0 ? (
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
        >
          {filtered.map((p) => (
            <PhilosopherCard key={p.id} philosopher={p} />
          ))}
        </div>
      ) : (
        <div
          className="text-center py-16 rounded-2xl"
          style={{
            background: 'rgba(26,21,16,0.4)',
            border: '1px solid rgba(192,161,114,0.08)',
          }}
        >
          <Search
            size={40}
            style={{ color: '#78909c', margin: '0 auto 16px', opacity: 0.4 }}
          />
          <p className="text-lg mb-2" style={{ color: '#b0a090' }}>
            No philosophers found
          </p>
          <p className="text-sm" style={{ color: '#78909c' }}>
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
