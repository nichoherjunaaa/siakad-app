// resources/js/Components/Teachers/SubjectDistribution.jsx
import { useState } from 'react';

export default function SubjectDistribution() {
    const [distribution] = useState([
        { subject: 'Matematika', teachers: 6, classes: 12, students: 320 },
        { subject: 'Fisika', teachers: 5, classes: 10, students: 280 },
        { subject: 'Kimia', teachers: 4, classes: 8, students: 240 },
        { subject: 'Biologi', teachers: 4, classes: 8, students: 240 },
        { subject: 'Bahasa Indonesia', teachers: 5, classes: 12, students: 320 },
        { subject: 'Bahasa Inggris', teachers: 5, classes: 12, students: 320 },
        { subject: 'Sejarah', teachers: 3, classes: 6, students: 180 },
        { subject: 'Geografi', teachers: 3, classes: 6, students: 180 },
        { subject: 'Ekonomi', teachers: 3, classes: 6, students: 180 },
        { subject: 'Seni Budaya', teachers: 2, classes: 8, students: 240 },
        { subject: 'Olahraga', teachers: 3, classes: 12, students: 360 },
        { subject: 'BK', teachers: 2, classes: 12, students: 360 }
    ]);

    const [sortBy, setSortBy] = useState('teachers'); // 'teachers', 'classes', 'students', 'subject'

    const sortedDistribution = [...distribution].sort((a, b) => {
        if (sortBy === 'teachers') return b.teachers - a.teachers;
        if (sortBy === 'classes') return b.classes - a.classes;
        if (sortBy === 'students') return b.students - a.students;
        return a.subject.localeCompare(b.subject);
    });

    const totalTeachers = distribution.reduce((sum, item) => sum + item.teachers, 0);
    const maxTeachers = Math.max(...distribution.map(item => item.teachers));

    const getSubjectColor = (subject) => {
        const colors = {
            'Matematika': 'bg-purple-500',
            'Fisika': 'bg-blue-500',
            'Kimia': 'bg-green-500',
            'Biologi': 'bg-emerald-500',
            'Bahasa Indonesia': 'bg-orange-500',
            'Bahasa Inggris': 'bg-red-500',
            'Sejarah': 'bg-yellow-500',
            'Geografi': 'bg-lime-500',
            'Ekonomi': 'bg-teal-500',
            'Seni Budaya': 'bg-pink-500',
            'Olahraga': 'bg-indigo-500',
            'BK': 'bg-gray-500'
        };
        return colors[subject] || 'bg-gray-500';
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Distribusi Guru per Mapel</h3>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="teachers">Jumlah Guru</option>
                    <option value="classes">Jumlah Kelas</option>
                    <option value="students">Jumlah Siswa</option>
                    <option value="subject">Nama Mapel</option>
                </select>
            </div>

            <div className="space-y-4">
                {sortedDistribution.map((item) => (
                    <div key={item.subject}>
                        <div className="flex justify-between text-sm mb-1">
                            <div className="flex items-center">
                                <div className={`w-3 h-3 ${getSubjectColor(item.subject)} rounded-sm mr-2`}></div>
                                <span className="font-medium text-neutral-900 mr-3">{item.subject}</span>
                                <span className="text-xs text-neutral-500">
                                    {item.teachers} guru • {item.classes} kelas
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="font-medium text-neutral-900">{item.students} siswa</span>
                            </div>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                            <div
                                className={`h-2 rounded-full ${getSubjectColor(item.subject)}`}
                                style={{ width: `${(item.teachers / maxTeachers) * 100}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-xs text-neutral-500 mt-1">
                            <span>
                                {((item.teachers / totalTeachers) * 100).toFixed(1)}% dari total guru
                            </span>
                            <span>Rasio: 1:{Math.round(item.students / item.teachers)}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700">{totalTeachers}</div>
                        <div className="text-sm text-neutral-600">Total Guru Mapel</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-700">
                            {distribution.length}
                        </div>
                        <div className="text-sm text-neutral-600">Total Mata Pelajaran</div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <div className="text-sm text-neutral-600">Rata-rata guru per mapel</div>
                    <div className="text-lg font-bold text-neutral-900">
                        {(totalTeachers / distribution.length).toFixed(1)}
                    </div>
                </div>
            </div>
        </div>
    );
}