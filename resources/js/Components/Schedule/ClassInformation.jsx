// resources/js/Components/Schedule/ClassInformation.jsx
export default function ClassInformation({ user }) {
    const classInfo = {
        room: user.room || 'Ruang XII IPA 1',
        homeroomTeacher: user.homeroomTeacher || 'Bu Sari, S.Pd.',
        totalStudents: user.totalStudents || 32,
        building: 'Gedung A Lantai 2',
        scheduleVersion: 'v2.1',
        lastUpdated: '11 Maret 2024'
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Informasi Kelas</h3>

            <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-door-open text-primary"></i>
                        </div>
                        <div>
                            <div className="text-sm text-neutral-600">Ruangan Kelas</div>
                            <div className="font-medium text-neutral-900">{classInfo.room}</div>
                        </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-white">
                        <i className="fas fa-map-marker-alt text-neutral-400"></i>
                    </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-user-tie text-green-600"></i>
                        </div>
                        <div>
                            <div className="text-sm text-neutral-600">Wali Kelas</div>
                            <div className="font-medium text-neutral-900">{classInfo.homeroomTeacher}</div>
                        </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-white">
                        <i className="fas fa-comment text-green-500"></i>
                    </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-users text-purple-600"></i>
                        </div>
                        <div>
                            <div className="text-sm text-neutral-600">Jumlah Siswa</div>
                            <div className="font-medium text-neutral-900">{classInfo.totalStudents} Siswa</div>
                        </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-white">
                        <i className="fas fa-list text-purple-500"></i>
                    </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-building text-orange-600"></i>
                        </div>
                        <div>
                            <div className="text-sm text-neutral-600">Gedung</div>
                            <div className="font-medium text-neutral-900">{classInfo.building}</div>
                        </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-white">
                        <i className="fas fa-directions text-orange-500"></i>
                    </button>
                </div>
            </div>

            {/* Metadata */}
            <div className="mt-6 pt-6 border-t border-neutral-200 text-xs text-neutral-500">
                <div className="flex justify-between">
                    <span>Versi Jadwal</span>
                    <span className="font-medium">{classInfo.scheduleVersion}</span>
                </div>
                <div className="flex justify-between mt-1">
                    <span>Terakhir Diperbarui</span>
                    <span className="font-medium">{classInfo.lastUpdated}</span>
                </div>
            </div>
        </div>
    );
}