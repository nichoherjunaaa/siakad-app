// resources/js/Components/Classes/TeacherDirectory.jsx
import { useState } from 'react';

export default function TeacherDirectory() {
    const [teachers] = useState([
        {
            id: 1,
            name: 'Bu Sari, S.Pd.',
            subject: 'Matematika',
            email: 'sari.matematika@sekolah.sch.id',
            phone: '081234567890',
            office: 'Guru-101',
            availability: 'Senin-Jumat, 08:00-15:00',
            rating: 4.8,
            experience: '10 tahun',
            specialization: 'Kalkulus, Aljabar',
            consultationHours: 'Rabu, 13:00-15:00',
            avatarColor: 'bg-purple-500'
        },
        {
            id: 2,
            name: 'Pak Budi, M.Pd.',
            subject: 'Fisika',
            email: 'budi.fisika@sekolah.sch.id',
            phone: '081234567891',
            office: 'Guru-102',
            availability: 'Senin-Kamis, 09:00-16:00',
            rating: 4.6,
            experience: '8 tahun',
            specialization: 'Mekanika, Termodinamika',
            consultationHours: 'Kamis, 14:00-16:00',
            avatarColor: 'bg-blue-500'
        },
        {
            id: 3,
            name: 'Bu Lisa, S.Si.',
            subject: 'Kimia',
            email: 'lisa.kimia@sekolah.sch.id',
            phone: '081234567892',
            office: 'Guru-103',
            availability: 'Selasa-Jumat, 08:30-15:30',
            rating: 4.5,
            experience: '6 tahun',
            specialization: 'Organik, Analitik',
            consultationHours: 'Selasa, 13:30-15:30',
            avatarColor: 'bg-green-500'
        },
        {
            id: 4,
            name: 'Bu Rina, M.Si.',
            subject: 'Biologi',
            email: 'rina.biologi@sekolah.sch.id',
            phone: '081234567893',
            office: 'Guru-104',
            availability: 'Senin-Kamis, 07:30-14:30',
            rating: 4.7,
            experience: '12 tahun',
            specialization: 'Genetika, Ekologi',
            consultationHours: 'Senin, 14:00-16:00',
            avatarColor: 'bg-emerald-500'
        }
    ]);

    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTeachers = teachers.filter(teacher =>
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleContact = (teacher, method) => {
        console.log(`Contact ${teacher.name} via ${method}`);
        // Implement contact functionality
    };

    const handleScheduleConsultation = (teacher) => {
        console.log('Schedule consultation with:', teacher);
        // Implement schedule consultation functionality
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Direktori Guru</h3>
                <button className="text-sm text-primary hover:text-primary-dark">
                    Lihat Semua
                </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Cari guru..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"></i>
            </div>

            {/* Teachers List */}
            <div className="space-y-4">
                {filteredTeachers.map((teacher) => (
                    <div 
                        key={teacher.id}
                        className={`border rounded-xl p-4 cursor-pointer hover:bg-neutral-50 ${
                            selectedTeacher?.id === teacher.id 
                                ? 'border-primary bg-primary/5' 
                                : 'border-neutral-200'
                        }`}
                        onClick={() => setSelectedTeacher(teacher.id === selectedTeacher?.id ? null : teacher)}
                    >
                        <div className="flex items-start">
                            {/* Avatar */}
                            <div className={`w-12 h-12 ${teacher.avatarColor} rounded-xl flex items-center justify-center mr-4`}>
                                <i className="fas fa-user-tie text-white text-xl"></i>
                            </div>

                            {/* Teacher Info */}
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-lg text-neutral-900">
                                        {teacher.name}
                                    </h4>
                                    <div className="flex items-center">
                                        <i className="fas fa-star text-yellow-500 mr-1"></i>
                                        <span className="font-medium">{teacher.rating}</span>
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="text-sm font-medium text-neutral-700 mr-3">
                                        {teacher.subject}
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded">
                                        {teacher.experience} pengalaman
                                    </span>
                                </div>
                                <div className="flex items-center text-sm text-neutral-600">
                                    <i className="fas fa-door-open mr-1"></i>
                                    <span className="mr-4">{teacher.office}</span>
                                    <i className="fas fa-clock mr-1"></i>
                                    <span>{teacher.availability}</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Buttons */}
                        <div className="flex space-x-2 mt-4">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleContact(teacher, 'email');
                                }}
                                className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 text-sm"
                            >
                                <i className="fas fa-envelope mr-1"></i>
                                Email
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleContact(teacher, 'message');
                                }}
                                className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 text-sm"
                            >
                                <i className="fas fa-comment-alt mr-1"></i>
                                Message
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleScheduleConsultation(teacher);
                                }}
                                className="flex-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark text-sm"
                            >
                                <i className="fas fa-calendar-check mr-1"></i>
                                Konsultasi
                            </button>
                        </div>

                        {/* Expanded Details */}
                        {selectedTeacher?.id === teacher.id && (
                            <div className="mt-4 pt-4 border-t border-neutral-200">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <div className="text-sm text-neutral-600 mb-1">Spesialisasi</div>
                                        <div className="font-medium text-neutral-900">{teacher.specialization}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-600 mb-1">Jam Konsultasi</div>
                                        <div className="font-medium text-neutral-900">{teacher.consultationHours}</div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm">
                                        <i className="fas fa-envelope text-neutral-500 mr-2 w-5"></i>
                                        <span className="text-neutral-700">{teacher.email}</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <i className="fas fa-phone text-neutral-500 mr-2 w-5"></i>
                                        <span className="text-neutral-700">{teacher.phone}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredTeachers.length === 0 && (
                <div className="text-center py-8">
                    <i className="fas fa-user-tie text-4xl text-neutral-300 mb-4"></i>
                    <p className="text-neutral-600">Tidak ditemukan guru</p>
                    {searchQuery && (
                        <button 
                            onClick={() => setSearchQuery('')}
                            className="mt-2 text-sm text-primary hover:text-primary-dark"
                        >
                            Reset Pencarian
                        </button>
                    )}
                </div>
            )}

            {/* Stats */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="text-center">
                    <div className="text-sm text-neutral-600 mb-2">Total Guru</div>
                    <div className="text-2xl font-bold text-neutral-900">{teachers.length}</div>
                </div>
            </div>
        </div>
    );
}