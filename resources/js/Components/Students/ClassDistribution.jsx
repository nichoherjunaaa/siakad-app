// resources/js/Components/Students/ClassDistribution.jsx
import { useState } from 'react';

export default function ClassDistribution() {
    const [distribution] = useState([
        { class: 'XII IPA 1', students: 32, male: 16, female: 16, averageScore: 85.5 },
        { class: 'XII IPA 2', students: 30, male: 14, female: 16, averageScore: 83.2 },
        { class: 'XII IPA 3', students: 28, male: 15, female: 13, averageScore: 81.8 },
        { class: 'XII IPS 1', students: 35, male: 18, female: 17, averageScore: 79.5 },
        { class: 'XII IPS 2', students: 33, male: 17, female: 16, averageScore: 80.2 },
        { class: 'XI IPA 1', students: 34, male: 18, female: 16, averageScore: 82.1 },
        { class: 'XI IPA 2', students: 32, male: 16, female: 16, averageScore: 83.5 },
        { class: 'XI IPS 1', students: 36, male: 19, female: 17, averageScore: 78.9 },
        { class: 'XI IPS 2', students: 34, male: 17, female: 17, averageScore: 79.8 }
    ]);

    const [sortBy, setSortBy] = useState('students'); // 'students', 'score', 'class'

    const sortedDistribution = [...distribution].sort((a, b) => {
        if (sortBy === 'students') return b.students - a.students;
        if (sortBy === 'score') return b.averageScore - a.averageScore;
        return a.class.localeCompare(b.class);
    });

    const totalStudents = distribution.reduce((sum, item) => sum + item.students, 0);
    const maxStudents = Math.max(...distribution.map(item => item.students));

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Distribusi per Kelas</h3>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="students">Jumlah Siswa</option>
                    <option value="score">Rata-rata Nilai</option>
                    <option value="class">Nama Kelas</option>
                </select>
            </div>

            <div className="space-y-4">
                {sortedDistribution.map((item) => (
                    <div key={item.class}>
                        <div className="flex justify-between text-sm mb-1">
                            <div className="flex items-center">
                                <span className="font-medium text-neutral-900 mr-3">{item.class}</span>
                                <span className="text-xs text-neutral-500">
                                    {item.male}L / {item.female}P
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="font-medium text-neutral-900 mr-3">{item.students} siswa</span>
                                <span className="text-sm text-neutral-600">{item.averageScore}</span>
                            </div>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                            <div 
                                className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                                style={{ width: `${(item.students / maxStudents) * 100}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-xs text-neutral-500 mt-1">
                            <span>
                                {((item.students / totalStudents) * 100).toFixed(1)}% dari total
                            </span>
                            <span>Rata-rata: {item.averageScore}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700">{totalStudents}</div>
                        <div className="text-sm text-neutral-600">Total Siswa</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-700">
                            {(distribution.reduce((sum, item) => sum + item.averageScore, 0) / distribution.length).toFixed(1)}
                        </div>
                        <div className="text-sm text-neutral-600">Rata-rata Umum</div>
                    </div>
                </div>
            </div>
        </div>
    );
}