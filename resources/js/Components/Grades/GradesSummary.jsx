// resources/js/Components/Grades/GradesSummary.jsx
import { useState } from 'react';

export default function GradesSummary() {
    const [summary] = useState({
        totalSubjects: 10,
        completedSubjects: 8,
        averageScore: 85.5,
        highestScore: 95.0,
        lowestScore: 72.0,
        gradeDistribution: {
            A: 5,
            B: 3,
            C: 2,
            D: 0,
            E: 0
        },
        comparison: {
            previous: 83.2,
            change: '+2.3',
            trend: 'up' // 'up', 'down', 'stable'
        }
    });

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

    const getTrendIcon = (trend) => {
        if (trend === 'up') return <i className="fas fa-arrow-up text-green-500"></i>;
        if (trend === 'down') return <i className="fas fa-arrow-down text-red-500"></i>;
        return <i className="fas fa-minus text-gray-500"></i>;
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Ringkasan Nilai</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Total Subjects */}
                <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-blue-700">
                                {summary.totalSubjects}
                            </div>
                            <div className="text-sm text-neutral-600">Total Mata Pelajaran</div>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-book text-blue-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Average Score */}
                <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-neutral-900">
                                {summary.averageScore}
                            </div>
                            <div className="text-sm text-neutral-600">Nilai Rata-rata</div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-green-600 flex items-center">
                                {getTrendIcon(summary.comparison.trend)}
                                <span className="ml-1">{summary.comparison.change}</span>
                            </div>
                            <div className="text-xs text-neutral-500">
                                dari {summary.comparison.previous}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highest Score */}
                <div className="p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-green-700">
                                {summary.highestScore}
                            </div>
                            <div className="text-sm text-neutral-600">Nilai Tertinggi</div>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-trophy text-green-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Lowest Score */}
                <div className="p-4 bg-orange-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-orange-700">
                                {summary.lowestScore}
                            </div>
                            <div className="text-sm text-neutral-600">Nilai Terendah</div>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-chart-line text-orange-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Completion */}
                <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-purple-700">
                                {summary.completedSubjects}/{summary.totalSubjects}
                            </div>
                            <div className="text-sm text-neutral-600">Mapel Tuntas</div>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-check-circle text-purple-600 text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grade Distribution */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-4">Distribusi Nilai</h4>
                <div className="flex flex-wrap gap-2">
                    {Object.entries(summary.gradeDistribution).map(([grade, count]) => (
                        <div
                            key={grade}
                            className={`px-3 py-2 rounded-lg border ${getGradeColor(grade)}`}
                        >
                            <div className="flex items-center">
                                <span className="font-bold text-lg mr-2">{grade}</span>
                                <span className="text-sm">{count} mapel</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                    <div className="flex justify-between text-sm text-neutral-600 mb-1">
                        <span>Progress Kelulusan</span>
                        <span>{((summary.completedSubjects / summary.totalSubjects) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-3">
                        <div
                            className="h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                            style={{ width: `${(summary.completedSubjects / summary.totalSubjects) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-500 mt-1">
                        <span>{summary.completedSubjects} mapel tuntas</span>
                        <span>{summary.totalSubjects - summary.completedSubjects} mapel tersisa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}