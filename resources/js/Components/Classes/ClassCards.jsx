import { router } from '@inertiajs/react';
import { useState } from 'react';
import { FaBook, FaEllipsisH, FaUserTie } from 'react-icons/fa';

export default function ClassCards({ subjects = [] }) {
    const [selectedClass, setSelectedClass] = useState(null);

    const handleClassClick = (classItem) => {
        setSelectedClass(selectedClass?.id === classItem.id ? null : classItem);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Mata Pelajaran</h3>
                <span className="text-sm text-neutral-600">
                    {subjects.length} mata pelajaran
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((classItem) => (
                    <div
                        key={classItem.id}
                        className={`border rounded-2xl overflow-hidden cursor-pointer transition
                            ${selectedClass?.id === classItem.id
                                ? 'border-primary ring-2 ring-primary/20'
                                : 'border-neutral-200 hover:shadow-md'
                            }`}
                        onClick={() => handleClassClick(classItem)}
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 text-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-xs opacity-90">
                                        {classItem.subject.subject_code}
                                    </div>
                                    <h4 className="text-xl font-bold">
                                        {classItem.subject.name}
                                    </h4>
                                    <p className="text-sm opacity-90">
                                        Kelas {classItem.class_room.grade_level}{" "}
                                        {classItem.class_room.major}{" "}
                                        {classItem.class_room.name}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <FaBook className="text-2xl" />
                                </div>
                            </div>
                        </div>

                        {/* Detail */}
                        <div className="p-4 bg-white">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mr-3">
                                    <FaUserTie className="text-neutral-600" />
                                </div>
                                <div>
                                    <div className="font-medium text-neutral-900">
                                        {classItem.teacher?.full_name || '-'}
                                    </div>
                                    <div className="text-xs text-neutral-500">
                                        Guru Pengampu
                                    </div>
                                </div>
                            </div>

                            {/* Action */}
                            <div className="flex space-x-2">
                                <button
                                    onClick={() =>
                                        router.get(
                                            route('subject.detail', {
                                                id: classItem.subject_id,
                                            })
                                        )
                                    }
                                    className="flex-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark text-sm"
                                >
                                    Masuk Kelas
                                </button>
                                <button className="px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
                                    <FaEllipsisH />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
