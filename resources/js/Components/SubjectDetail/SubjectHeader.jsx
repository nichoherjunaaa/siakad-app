// resources/js/Components/SubjectDetail/SubjectHeader.jsx
import { useState, useEffect } from 'react';
import { FaBook, FaUserTie } from 'react-icons/fa';

export default function SubjectHeader({ schedule }) {
    const [nextSession, setNextSession] = useState(null);
    const [isTeacherInfoOpen, setIsTeacherInfoOpen] = useState(false);
    console.log(schedule.teacher); //undefined
    console.log(schedule[0].teacher); //ada

        const scheduleItem = Array.isArray(schedule) ? schedule[0] : schedule;

        // Debug (sekarang AMAN)
        console.log(scheduleItem?.teacher);

        const subjectData = scheduleItem ? {
            id: scheduleItem.subject?.id ?? '',
            name: scheduleItem.subject?.name ?? '',
            code: scheduleItem.subject?.subject_code ?? '',
            grade: scheduleItem.subject?.minimum_passing_grade ?? 0,

            teacher: scheduleItem.teacher ?? {
                full_name: 'Belum ditentukan',
                employee_number: '',
                email: '',
                phone: '',
                status: 'unknown'
            },

            classRoom: scheduleItem.class_room ?? null,

            academicYear: scheduleItem.academic_year_id ?? '',

            schedule: [
                {
                    day: scheduleItem.day_of_week,
                    start_time: scheduleItem.start_time,
                    end_time: scheduleItem.end_time
                }
            ],

            credits: 0,
            semester: '',
            totalStudents: 0,
            progress: 0,
            materials: 0,
            assignments: 0,
            announcements: 0
        } : null;


        // =========================
        // NEXT SESSION LOGIC
        // =========================
        const dayMap = {
            sunday: 0,
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6
        };

        useEffect(() => {
            if (subjectData) {
                setNextSession(getNextSession());
            }
        }, [scheduleItem]);


        const getNextSession = () => {
            if (!subjectData?.schedule?.length) return null;

            const today = new Date().getDay();

            for (let i = 0; i < 7; i++) {
                const checkDay = (today + i) % 7;

                const session = subjectData.schedule.find(
                    s => dayMap[s.day] === checkDay
                );

                if (session) {
                    return {
                        ...session,
                        isToday: i === 0,
                        daysUntil: i
                    };
                }
            }
            return null;
        };

        // =========================
        // EMPTY STATE
        // =========================
        if (!subjectData) {
            return (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                    <div className="text-center py-8">
                        <FaBook className="text-4xl text-neutral-300 mb-4" />
                        <p className="text-neutral-600">Data mata pelajaran tidak ditemukan</p>
                    </div>
                </div>
            );
        }

        // =========================
        // UI
        // =========================
        return (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-2">

                {/* HEADER */}
                <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                        <FaBook className="text-white text-3xl" />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-neutral-900">
                            {subjectData.name}
                        </h1>

                        <div className="flex flex-wrap gap-2 text-sm text-neutral-600">
                            <span>Kode: {subjectData.code}</span>
                            <span>•</span>
                            <span>Nilai Minimum: {subjectData.grade}</span>

                            {subjectData.classRoom && (
                                <>
                                    <span>•</span>
                                    <span>
                                        Kelas {subjectData.classRoom.grade_level}-{subjectData.classRoom.name}-{subjectData.classRoom.major}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* TEACHER */}
                <div className="relative mb-6">
                    <button
                        onClick={() => setIsTeacherInfoOpen(!isTeacherInfoOpen)}
                        className="flex items-center p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 w-full"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-3">
                            <FaUserTie className="text-primary text-lg" />
                        </div>

                        <div className="flex-1 text-left">
                            <div className="font-medium text-neutral-900">
                                {subjectData.teacher.full_name}
                            </div>
                            <div className="text-sm text-neutral-600">
                                Guru Pengampu
                            </div>
                        </div>

                        <i className={`fas fa-chevron-${isTeacherInfoOpen ? 'up' : 'down'} text-neutral-400`} />
                    </button>

                    {isTeacherInfoOpen && (
                        <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg border p-4">
                            <p className="text-sm text-neutral-700">
                                <strong>NIP:</strong> {subjectData.teacher.employee_number || '-'}
                            </p>
                            <p className="text-sm text-neutral-700">
                                <strong>Status:</strong> {subjectData.teacher.status ?? 'Aktif'}
                            </p>
                        </div>
                    )}
                </div>

                {/* NEXT SESSION */}
                {nextSession && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm">
                        <strong>
                            {nextSession.isToday ? 'Hari ini' : `${nextSession.daysUntil} hari lagi`}
                        </strong>
                        <div>
                            Jam {nextSession.start_time} - {nextSession.end_time}
                        </div>
                    </div>
                )}
            </div>
        );
    }
