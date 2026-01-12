export default function TeacherStats({ teachers = [] }) {
    // ===== Gender =====
    const maleTeachers = teachers.filter(
        teacher => teacher.user?.gender === 'male'
    ).length;

    const femaleTeachers = teachers.filter(
        teacher => teacher.user?.gender === 'female'
    ).length;

    const statsByStatus = {
        active: teachers.filter(t => t.status === 'active').length,
        onLeave: teachers.filter(t => t.status === 'onLeave').length,
        retired: teachers.filter(t => t.status === 'retired').length,
        resigned: teachers.filter(t => t.status === 'resigned').length,
    };

    const totalTeachers = maleTeachers + femaleTeachers;
    const totalByStatus = Object.values(statsByStatus).reduce((a, b) => a + b, 0);

    const getStatusColor = (status) => ({
        active: 'bg-green-500',
        onLeave: 'bg-yellow-500',
        retired: 'bg-gray-500',
        resigned: 'bg-red-500',
    }[status] || 'bg-gray-500');

    const getStatusLabel = (status) => ({
        active: 'Aktif',
        onLeave: 'Cuti',
        retired: 'Pensiun',
        resigned: 'Mengundurkan Diri',
    }[status] || status);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">
                Statistik Guru
            </h3>

            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">
                    Distribusi Gender
                </h4>

                <div className="flex items-center space-x-4">
                    <div className="relative w-32 h-32">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="10"
                                strokeDasharray={`${(maleTeachers / totalTeachers) * 283} 283`}
                                transform="rotate(-90 50 50)"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#ec4899"
                                strokeWidth="10"
                                strokeDasharray={`${(femaleTeachers / totalTeachers) * 283} ${(maleTeachers / totalTeachers) * 283}`}
                                transform={`rotate(${(maleTeachers / totalTeachers) * 360 - 90} 50 50)`}
                            />
                        </svg>

                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-2xl font-bold text-neutral-900">
                                {totalTeachers}
                            </div>
                            <div className="text-sm text-neutral-600">
                                Total
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-3">
                        {[
                            { label: 'Laki-laki', value: maleTeachers, color: 'bg-blue-500' },
                            { label: 'Perempuan', value: femaleTeachers, color: 'bg-pink-500' },
                        ].map(item => (
                            <div key={item.label} className="flex justify-between">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 ${item.color} rounded-sm mr-2`} />
                                    <span className="text-sm text-neutral-700">
                                        {item.label}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium text-neutral-900">
                                        {item.value}
                                    </div>
                                    <div className="text-xs text-neutral-500">
                                        {totalTeachers
                                            ? ((item.value / totalTeachers) * 100).toFixed(1)
                                            : 0}
                                        %
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== Status Distribution ===== */}
            <div>
                <h4 className="font-medium text-neutral-900 mb-4">
                    Distribusi Status
                </h4>

                <div className="space-y-3">
                    {Object.entries(statsByStatus).map(([status, count]) => (
                        <div key={status}>
                            <div className="flex justify-between text-sm mb-1">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 ${getStatusColor(status)} rounded-sm mr-2`} />
                                    <span className="text-neutral-700">
                                        {getStatusLabel(status)}
                                    </span>
                                </div>
                                <span className="font-medium text-neutral-900">
                                    {count}
                                </span>
                            </div>

                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${getStatusColor(status)}`}
                                    style={{
                                        width: totalByStatus
                                            ? `${(count / totalByStatus) * 100}%`
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
