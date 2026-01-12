// resources/js/Components/SubjectDetail/GradeOverview.jsx
import { useState } from 'react';

export default function GradeOverview() {
    const [grades] = useState({
        currentGrade: 89.5,
        classAverage: 82.3,
        rank: 3,
        totalStudents: 32,
        assignments: [
            { name: 'Tugas 1', score: 92, maxScore: 100, weight: 15, date: '10 Des 2023' },
            { name: 'Tugas 2', score: 88, maxScore: 100, weight: 15, date: '15 Des 2023' },
            { name: 'UTS', score: 90, maxScore: 100, weight: 30, date: '25 Nov 2023' },
            { name: 'Tugas 3', score: 85, maxScore: 100, weight: 15, date: '20 Des 2023' },
            { name: 'UAS', score: 0, maxScore: 100, weight: 25, date: '5 Jan 2024' }
        ],
        gradeBreakdown: {
            assignments: 85.0,
            quizzes: 90.0,
            participation: 88.0,
            exams: 90.0
        },
        progress: 75,
        trend: 'up',
        prediction: 91.2
    });

    const calculateAssignmentGrade = () => {
        let totalWeightedScore = 0;
        let totalWeight = 0;

        grades.assignments.forEach(assignment => {
            if (assignment.score > 0) {
                totalWeightedScore += (assignment.score / assignment.maxScore) * assignment.weight;
                totalWeight += assignment.weight;
            }
        });

        return totalWeight > 0 ? (totalWeightedScore / totalWeight * 100).toFixed(1) : 0;
    };

    const getGradeColor = (grade) => {
        if (grade >= 90) return 'text-green-600';
        if (grade >= 80) return 'text-blue-600';
        if (grade >= 70) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getGradeLetter = (grade) => {
        if (grade >= 90) return 'A';
        if (grade >= 80) return 'B';
        if (grade >= 70) return 'C';
        if (grade >= 60) return 'D';
        return 'E';
    };

    const getTrendIcon = () => {
        if (grades.trend === 'up') return <i className="fas fa-arrow-up text-green-500"></i>;
        if (grades.trend === 'down') return <i className="fas fa-arrow-down text-red-500"></i>;
        return <i className="fas fa-minus text-gray-500"></i>;
    };

    const assignmentGrade = calculateAssignmentGrade();

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Ringkasan Nilai</h3>

            {/* Current Grade */}
            <div className="mb-6">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                        <span className={getGradeColor(grades.currentGrade)}>
                            {grades.currentGrade}
                        </span>
                    </div>
                    <div className={`text-2xl font-bold ${getGradeColor(grades.currentGrade)} mb-3`}>
                        {getGradeLetter(grades.currentGrade)}
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <div className="text-center">
                            <div className="text-sm text-neutral-600">Peringkat</div>
                            <div className="text-lg font-bold text-neutral-900">#{grades.rank}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-neutral-600">Kelas</div>
                            <div className="text-lg font-bold text-neutral-900">{grades.classAverage}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
                <div className="flex justify-between text-sm text-neutral-600 mb-2">
                    <span>Progress Penilaian</span>
                    <span>{grades.progress}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-3">
                    <div
                        className="h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: `${grades.progress}%` }}
                    ></div>
                </div>
                <div className="text-xs text-neutral-500 mt-2">
                    {grades.assignments.filter(a => a.score > 0).length} dari {grades.assignments.length} tugas dinilai
                </div>
            </div>

            {/* Grade Breakdown */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Breakdown Nilai</h4>
                <div className="space-y-3">
                    {Object.entries(grades.gradeBreakdown).map(([category, score]) => (
                        <div key={category}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-neutral-700 capitalize">{category}</span>
                                <span className="font-medium text-neutral-900">{score}</span>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${getGradeColor(score).replace('text', 'bg')}`}
                                    style={{ width: `${score}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upcoming Assignments */}
            <div>
                <h4 className="font-medium text-neutral-900 mb-4">Tugas Mendatang</h4>
                <div className="space-y-3">
                    {grades.assignments
                        .filter(a => a.score === 0)
                        .map((assignment, index) => (
                            <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="font-medium text-neutral-900">{assignment.name}</div>
                                    <div className="text-sm text-neutral-600">{assignment.date}</div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-neutral-600">Bobot: {assignment.weight}%</span>
                                    <span className="text-yellow-600">Belum dikumpulkan</span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Prediction */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="text-center">
                    <div className="text-sm text-neutral-600 mb-1">Prediksi Nilai Akhir</div>
                    <div className="text-xl font-bold text-primary">
                        {grades.prediction} {getTrendIcon()}
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                        Berdasarkan performa saat ini
                    </div>
                </div>
            </div>
        </div>
    );
}