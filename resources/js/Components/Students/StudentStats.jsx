// resources/js/Components/Students/StudentStats.jsx

export default function StudentStats({ students = [] }) {
    // ====== BY GENDER ======
    const male = students.filter(s => s.user?.gender === 'male').length;
    const female = students.filter(s => s.user?.gender === 'female').length;
    const totalStudents = male + female;

    // ====== BY STATUS ======
    const byStatus = {
        active: students.filter(s => s.status === 'active').length,
        graduated: students.filter(s => s.status === 'graduated').length,
        transferred: students.filter(s => s.status === 'transferred').length,
        dropout: students.filter(s => s.status === 'dropout').length,
    };

    // ====== BY CLASS LEVEL ======
    const byClassLevel = {
        X: students.filter(s => s.class_room?.grade_level === 'X').length,
        XI: students.filter(s => s.class_room?.grade_level === 'XI').length,
        XII: students.filter(s => s.class_room?.grade_level === 'XII').length,
    };

    const getStatusColor = (status) => ({
        active: 'bg-green-500',
        graduated: 'bg-blue-500',
        transferred: 'bg-yellow-500',
        dropout: 'bg-red-500',
    }[status] || 'bg-gray-500');

    const getStatusLabel = (status) => ({
        active: 'Aktif',
        graduated: 'Lulus',
        transferred: 'Pindah',
        dropout: 'Drop Out',
    }[status] || status);

    const totalStatus = Object.values(byStatus).reduce((a, b) => a + b, 0);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">
                Statistik Siswa
            </h3>

            {/* ===== GENDER DISTRIBUTION ===== */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">
                    Distribusi Gender
                </h4>

                <div className="flex items-center space-x-6">
                    <div className="relative w-32 h-32">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="10"
                                strokeDasharray={`${(male / totalStudents) * 283} 283`}
                                transform="rotate(-90 50 50)"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#ec4899"
                                strokeWidth="10"
                                strokeDasharray={`${(female / totalStudents) * 283} 283`}
                                transform={`rotate(${(male / totalStudents) * 360 - 90} 50 50)`}
                            />
                        </svg>

                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold">
                                {totalStudents}
                            </span>
                            <span className="text-sm text-neutral-600">
                                Total
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3 flex-1">
                        {[
                            { label: 'Laki-laki', value: male, color: 'bg-blue-500' },
                            { label: 'Perempuan', value: female, color: 'bg-pink-500' },
                        ].map(item => (
                            <div key={item.label} className="flex justify-between">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 ${item.color} mr-2`} />
                                    <span className="text-sm">{item.label}</span>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium">{item.value}</div>
                                    <div className="text-xs text-neutral-500">
                                        {totalStudents
                                            ? ((item.value / totalStudents) * 100).toFixed(1)
                                            : 0}
                                        %
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== STATUS DISTRIBUTION ===== */}
            <div>
                <h4 className="font-medium text-neutral-900 mb-4">
                    Distribusi Status
                </h4>

                <div className="space-y-3">
                    {Object.entries(byStatus).map(([status, count]) => (
                        <div key={status}>
                            <div className="flex justify-between text-sm mb-1">
                                <div className="flex items-center">
                                    <div
                                        className={`w-3 h-3 ${getStatusColor(status)} mr-2`}
                                    />
                                    <span>{getStatusLabel(status)}</span>
                                </div>
                                <span className="font-medium">{count}</span>
                            </div>

                            <div className="w-full bg-neutral-200 h-2 rounded-full">
                                <div
                                    className={`h-2 rounded-full ${getStatusColor(status)}`}
                                    style={{
                                        width: totalStatus
                                            ? `${(count / totalStatus) * 100}%`
                                            : '0%',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
