// resources/js/Components/Teachers/TeacherStats.jsx
import { useState } from 'react';

export default function TeacherStats() {
    const [stats] = useState({
        byGender: {
            male: 25,
            female: 23
        },
        byStatus: {
            active: 45,
            onLeave: 3,
            retired: 2,
            resigned: 1
        },
        byExperience: {
            junior: 15, // 1-5 tahun
            mid: 20,    // 6-15 tahun
            senior: 13  // 16+ tahun
        },
        byCertification: {
            certified: 32,
            inProcess: 8,
            notCertified: 8
        },
        byEducation: {
            s3: 3,
            s2: 18,
            s1: 27
        },
        averageAge: 42,
        averageExperience: '8.5 tahun',
        averageRating: 4.5
    });

    const getStatusColor = (status) => {
        const colors = {
            active: 'bg-green-500',
            onLeave: 'bg-yellow-500',
            retired: 'bg-gray-500',
            resigned: 'bg-red-500'
        };
        return colors[status] || 'bg-gray-500';
    };

    const getStatusLabel = (status) => {
        const labels = {
            active: 'Aktif',
            onLeave: 'Cuti',
            retired: 'Pensiun',
            resigned: 'Mengundurkan Diri'
        };
        return labels[status] || status;
    };

    const getExperienceColor = (level) => {
        const colors = {
            junior: 'bg-blue-500',
            mid: 'bg-green-500',
            senior: 'bg-purple-500'
        };
        return colors[level] || 'bg-gray-500';
    };

    const getExperienceLabel = (level) => {
        const labels = {
            junior: 'Junior (1-5 tahun)',
            mid: 'Menengah (6-15 tahun)',
            senior: 'Senior (16+ tahun)'
        };
        return labels[level] || level;
    };

    const getCertificationColor = (status) => {
        const colors = {
            certified: 'bg-green-500',
            inProcess: 'bg-yellow-500',
            notCertified: 'bg-gray-500'
        };
        return colors[status] || 'bg-gray-500';
    };

    const getCertificationLabel = (status) => {
        const labels = {
            certified: 'Bersertifikat',
            inProcess: 'Dalam Proses',
            notCertified: 'Belum'
        };
        return labels[status] || status;
    };

    const totalTeachers = stats.byGender.male + stats.byGender.female;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Statistik Guru</h3>

            {/* Gender Distribution */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Distribusi Gender</h4>
                <div className="flex items-center space-x-4">
                    <div className="relative w-32 h-32">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            {/* Male slice */}
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="10"
                                strokeDasharray={`${(stats.byGender.male / totalTeachers) * 283} 283`}
                                transform="rotate(-90 50 50)"
                            />
                            {/* Female slice */}
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#ec4899"
                                strokeWidth="10"
                                strokeDasharray={`${(stats.byGender.female / totalTeachers) * 283} ${(stats.byGender.male / totalTeachers) * 283}`}
                                transform={`rotate(${(stats.byGender.male / totalTeachers) * 360 - 90} 50 50)`}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-2xl font-bold text-neutral-900">{totalTeachers}</div>
                            <div className="text-sm text-neutral-600">Total</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                                    <span className="text-sm text-neutral-700">Laki-laki</span>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium text-neutral-900">{stats.byGender.male}</div>
                                    <div className="text-xs text-neutral-500">
                                        {((stats.byGender.male / totalTeachers) * 100).toFixed(1)}%
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-pink-500 rounded-sm mr-2"></div>
                                    <span className="text-sm text-neutral-700">Perempuan</span>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium text-neutral-900">{stats.byGender.female}</div>
                                    <div className="text-xs text-neutral-500">
                                        {((stats.byGender.female / totalTeachers) * 100).toFixed(1)}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Distribution */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Distribusi Status</h4>
                <div className="space-y-3">
                    {Object.entries(stats.byStatus).map(([status, count]) => (
                        <div key={status}>
                            <div className="flex justify-between text-sm mb-1">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 ${getStatusColor(status)} rounded-sm mr-2`}></div>
                                    <span className="text-neutral-700">{getStatusLabel(status)}</span>
                                </div>
                                <span className="font-medium text-neutral-900">{count}</span>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${getStatusColor(status)}`}
                                    style={{
                                        width: `${(count / Object.values(stats.byStatus).reduce((a, b) => a + b, 0)) * 100}%`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Experience Distribution */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Distribusi Pengalaman</h4>
                <div className="space-y-3">
                    {Object.entries(stats.byExperience).map(([level, count]) => (
                        <div key={level}>
                            <div className="flex justify-between text-sm mb-1">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 ${getExperienceColor(level)} rounded-sm mr-2`}></div>
                                    <span className="text-neutral-700">{getExperienceLabel(level)}</span>
                                </div>
                                <span className="font-medium text-neutral-900">{count}</span>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${getExperienceColor(level)}`}
                                    style={{
                                        width: `${(count / Object.values(stats.byExperience).reduce((a, b) => a + b, 0)) * 100}%`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary Stats */}
            <div className="pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-4">Ringkasan</h4>
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-700">{stats.averageAge}</div>
                        <div className="text-sm text-neutral-600">Rata-rata Usia</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-700">{stats.averageExperience}</div>
                        <div className="text-sm text-neutral-600">Pengalaman</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <div className="text-lg font-bold text-yellow-700">{stats.averageRating}</div>
                        <div className="text-sm text-neutral-600">Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
}