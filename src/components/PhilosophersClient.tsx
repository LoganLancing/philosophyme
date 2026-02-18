'use client';

import { useState, useMemo } from 'react';
import { Search, ChevronDown } from 'lucide-react';
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
    return philosophers
      .filter((p) => {
        if (filterEra !== 'all' && p.era !== filterEra) return false;
        if (filterBranch !== 'all' && !p.branch.includes(filterBranch)) return false;
        if (filterSchool !== 'all' && !p.school.includes(filterSchool)) return false;
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.thesis.toLowerCase().includes(q) ||
            p.bio.toLowerCase().includes(q) ||
            p.branch.some((b) => b.toLowerCase().includes(q)) ||
            p.school.some((s) => s.toLowerCase().includes(q)) ||
            p.works.some((w) => w.toLowerCase().includes(q))
          );
        }
        return true;
      })
      .sort((a, b) => a.birth - b.birth);
  }, [searchQuery, filterEra, filterBranch, filterSchool]);

  const selectStyle = {
    background: 'rgba(192,161,114,0.06)',
    border: '1px solid rgba(192,161,114,0.15)',
    color: '#b0a090',
    outline: 'none',
    appearance: 'none' as const,
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2378909c' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    paddingRight: '32px',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
        >
          {filtered.length} Philosophers
        </h1>
        <p className="text-base" style={{ color: '#78909c' }}>
          Explore {philosophers.length} thinkers across 2,600 years of Western philosophy.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search
            size={16}
            style={{ color: '#78909c', position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Search by name, idea, school, or work..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm"
            style={{
              background: 'rgba(192,161,114,0.06)',
              border: '1px solid rgba(192,161,114,0.15)',
              color: '#f4f4f4',
              outline: 'none',
            }}
          />
        </div>
        <select
          value={filterEra}
          onChange={(e) => setFilterEra(e.target.value)}
          className="px-4 py-2.5 rounded-lg text-sm"
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
          className="px-4 py-2.5 rounded-lg text-sm"
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
          className="px-4 py-2.5 rounded-lg text-sm"
          style={selectStyle}
        >
          <option value="all">All Schools</option>
          {schools.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg" style={{ color: '#78909c' }}>
            No philosophers match your search.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilterEra('all');
              setFilterBranch('all');
              setFilterSchool('all');
            }}
            className="mt-3 text-sm"
            style={{ color: '#c0a172' }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <PhilosopherCard key={p.id} philosopher={p} />
          ))}
        </div>
      )}
    </div>
  );
}
