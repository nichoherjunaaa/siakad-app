// resources/js/Components/Grades/GradesTable.jsx
import { useState } from 'react';

export default function GradesTable() {
    const [subjects] = useState([
        {
            id: 1,
            name: 'Matematika',
            teacher: 'Bu Sari, S.Pd.',
            assignments: [
                { type: 'UH1', score: 85, weight: 15 },
                { type: 'UH2', score: 88, weight: 15 },
                { type: 'UTS', score: 90, weight: 30 },
                { type: 'UAS', score: 92, weight: 40 }
            ],
            finalScore: 89.5,
            grade: 'A',
            status: 'completed',
            rank: 3,
            trend: 'up'
        },
        {
            id: 2,
            name: 'Fisika',
            teacher: 'Pak Budi, M.Pd.',
            assignments: [
                { type: 'UH1', score: 78, weight: 15 },
                { type: 'UH2', score: 82, weight: 15 },
                { type: 'UTS', score: 85, weight: 30 },
                { type: 'UAS', score: 88, weight: 40 }
            ],
            finalScore: 84.5,
            grade: 'B',
            status: 'completed',
            rank: 8,
            trend: 'up'
        },
        {
            id: 3,
            name: 'Kimia',
            teacher: 'Bu Lisa, S.Si.',
            assignments: [
                { type: 'UH1', score: 72, weight: 15 },
                { type: 'UH2', score: 75, weight: 15 },
                { type: 'UTS', score: 78, weight: 30 },
                { type: 'UAS', score: 0, weight: 40 }
            ],
            finalScore: 56.3,
            grade: 'D',
            status: 'incomplete',
            rank: 25,
            trend: 'down'
        },
        {
            id: 4,
            name: 'Biologi',
            teacher: 'Bu Rina, M.Si.',
            assignments: [
                { type: 'UH1', score: 88, weight: 15 },
                { type: 'UH2', score: 90, weight: 15 },
                { type: 'UTS', score: 92, weight: 30 },
                { type: 'UAS', score: 94, weight: 40 }
            ],
            finalScore: 92.0,
            grade: 'A',
            status: 'completed',
            rank: 2,
            trend: 'up'
        },
        {
            id: 5,
            name: 'Bahasa Inggris',
            teacher: 'Bu Maya, S.Pd.',
            assignments: [
                { type: 'UH1', score: 80, weight: 15 },
                { type: 'UH2', score: 82, weight: 15 },
                { type: 'UTS', score: 85, weight: 30 },
                { type: 'UAS', score: 0, weight: 40 }
            ],
            finalScore: 61.8,
            grade: 'C',
            status: 'incomplete',
            rank: 18,
            trend: 'stable'
        }
    ]);

    const [expandedSubject, setExpandedSubject] = useState(null);
    const [sortBy, setSortBy] = useState('name');
    const [filterStatus, setFilterStatus] = useState('all');

    const getGradeColor = (grade) => {
        const colors = {
            A: 'bg-green-100 text-green-700 border-green-200',
            B: 'bg-blue-100 text-blue-700 border-blue-200',
            C: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            D: 'bg-orange-100 text-orange-700 border-orange-200',
            E: 'bg-red-100 text-red-700 border-red-200'
        };
        return colors[grade] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getStatusColor = (status) => {
        if (status === 'completed') return 'bg-green-100 text-green-700';
        if (status === 'incomplete') return 'bg-orange-100 text-orange-700';
        return 'bg-gray-100 text-gray-700';
    };

    const getTrendIcon = (trend) => {
        if (trend === 'up') return <i className="fas fa-arrow-up text-green-500"></i>;
        if (trend === 'down') return <i className="fas fa-arrow-down text-red-500"></i>;
        return <i className="fas fa-minus text-gray-500"></i>;
    };

    const toggleExpand = (subjectId) => {
        setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
    };

    const filteredSubjects = subjects.filter(subject => {
        if (filterStatus === 'all') return true;
        return subject.status === filterStatus;
    });

    const sortedSubjects = [...filteredSubjects].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'score':
                return b.finalScore - a.finalScore;
            case 'grade':
                return a.grade.localeCompare(b.grade);
            case 'rank':
                return a.rank - b.rank;
            default:
                return 0;
        }
    });

    const calculateAverage = () => {
        const completed = subjects.filter(s => s.status === 'completed');
        if (completed.length === 0) return 0;
        const sum = completed.reduce((acc, subject) => acc + subject.finalScore, 0);
        return (sum / completed.length).toFixed(1);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            {/* Table Header */}
            <div className="p-6 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold text-neutral-900">Detail Nilai per Mata Pelajaran</h3>
                        <p className="text-sm text-neutral-600">
                            Rata-rata: {calculateAverage()} • {subjects.filter(s => s.status === 'completed').length} dari {subjects.length} mapel tuntas
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Filter */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-neutral-600">Status:</span>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="all">Semua</option>
                                <option value="completed">Tuntas</option>
                                <option value="incomplete">Belum Tuntas</option>
                            </select>
                        </div>

                        {/* Sort */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-neutral-600">Urutkan:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="name">Nama Mapel</option>
                                <option value="score">Nilai Tertinggi</option>
                                <option value="grade">Grade</option>
                                <option value="rank">Peringkat</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subjects List */}
            <div className="divide-y divide-neutral-200">
                {sortedSubjects.map((subject) => {
                    const isExpanded = expandedSubject === subject.id;

                    return (
                        <div key={subject.id} className="p-6 hover:bg-neutral-50">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                                        <i className="fas fa-book text-primary text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg text-neutral-900">
                                            {subject.name}
                                        </h4>
                                        <p className="text-sm text-neutral-600">{subject.teacher}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    {/* Final Score */}
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-neutral-900">
                                            {subject.finalScore}
                                        </div>
                                        <div className="text-sm text-neutral-600">Nilai Akhir</div>
                                    </div>

                                    {/* Grade */}
                                    <div className={`px-3 py-2 rounded-lg border ${getGradeColor(subject.grade)}`}>
                                        <div className="font-bold text-lg">{subject.grade}</div>
                                    </div>

                                    {/* Expand Button */}
                                    <button
                                        onClick={() => toggleExpand(subject.id)}
                                        className="p-2 rounded-lg hover:bg-neutral-100"
                                    >
                                        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-neutral-600`}></i>
                                    </button>
                                </div>
                            </div>

                            {/* Subject Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div className="text-center p-3 bg-neutral-50 rounded-lg">
                                    <div className="text-sm text-neutral-600 mb-1">Peringkat</div>
                                    <div className="text-xl font-bold text-neutral-900">
                                        #{subject.rank}
                                    </div>
                                </div>
                                <div className="text-center p-3 bg-neutral-50 rounded-lg">
                                    <div className="text-sm text-neutral-600 mb-1">Status</div>
                                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(subject.status)}`}>
                                        {subject.status === 'completed' ? 'Tuntas' : 'Belum Tuntas'}
                                    </div>
                                </div>
                                <div className="text-center p-3 bg-neutral-50 rounded-lg">
                                    <div className="text-sm text-neutral-600 mb-1">Trend</div>
                                    <div className="text-xl">
                                        {getTrendIcon(subject.trend)}
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            {isExpanded && (
                                <div className="mt-4 pt-4 border-t border-neutral-200">
                                    <h5 className="font-medium text-neutral-900 mb-3">Detail Penilaian</h5>

                                    {/* Assignments Table */}
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-neutral-50">
                                                <tr>
                                                    <th className="p-3 text-left font-medium text-neutral-700">Jenis</th>
                                                    <th className="p-3 text-left font-medium text-neutral-700">Nilai</th>
                                                    <th className="p-3 text-left font-medium text-neutral-700">Bobot</th>
                                                    <th className="p-3 text-left font-medium text-neutral-700">Kontribusi</th>
                                                    <th className="p-3 text-left font-medium text-neutral-700">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {subject.assignments.map((assignment, index) => {
                                                    const contribution = (assignment.score * assignment.weight) / 100;
                                                    const isMissing = assignment.score === 0;

                                                    return (
                                                        <tr key={index} className="border-t border-neutral-200">
                                                            <td className="p-3">
                                                                <span className="font-medium">{assignment.type}</span>
                                                            </td>
                                                            <td className="p-3">
                                                                <div className={`font-medium ${isMissing ? 'text-red-600' : 'text-neutral-900'}`}>
                                                                    {isMissing ? 'Belum dinilai' : assignment.score}
                                                                </div>
                                                            </td>
                                                            <td className="p-3">
                                                                <div className="text-neutral-700">{assignment.weight}%</div>
                                                            </td>
                                                            <td className="p-3">
                                                                <div className="font-medium text-neutral-900">
                                                                    {isMissing ? '-' : contribution.toFixed(1)}
                                                                </div>
                                                            </td>
                                                            <td className="p-3">
                                                                {isMissing ? (
                                                                    <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">
                                                                        Belum
                                                                    </span>
                                                                ) : (
                                                                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                                                        Selesai
                                                                    </span>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-4 flex justify-end space-x-2">
                                        <button className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50">
                                            <i className="fas fa-chart-line mr-1"></i>
                                            Lihat Grafik
                                        </button>
                                        <button className="px-3 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-dark">
                                            <i className="fas fa-download mr-1"></i>
                                            Download Detail
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Empty State */}
            {sortedSubjects.length === 0 && (
                <div className="p-12 text-center">
                    <i className="fas fa-chart-line text-4xl text-neutral-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-neutral-700 mb-2">Belum ada nilai</h3>
                    <p className="text-neutral-500">Nilai akan muncul di sini setelah dinilai oleh guru.</p>
                </div>
            )}
        </div>
    );
}