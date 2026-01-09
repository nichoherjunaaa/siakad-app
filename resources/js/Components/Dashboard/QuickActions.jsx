import { FaUpload, FaCalendar, FaFileDownload, FaChartBar, FaChalkboardTeacher, FaClipboardList, FaEdit, FaUsers, FaUserGraduate, FaChartLine, FaComments, FaFileInvoice } from "react-icons/fa";
export default function QuickActions({ role = 'siswa' }) {
    // Gunakan href biasa untuk sementara
    const actionsByRole = {
        siswa: [
            { 
                icon: FaUpload, 
                label: "Upload Tugas", 
                href: "#",
                color: "text-blue-500",
                bgColor: "bg-blue-50"
            },
            { 
                icon: FaCalendar, 
                label: "Jadwal", 
                href: "#",
                color: "text-green-500",
                bgColor: "bg-green-50"
            },
            { 
                icon: FaFileDownload, 
                label: "Materi", 
                href: "#",
                color: "text-purple-500",
                bgColor: "bg-purple-50"
            },
            { 
                icon: FaChartBar, 
                label: "Rapor", 
                href: "#",
                color: "text-orange-500",
                bgColor: "bg-orange-50"
            }
        ],
        guru: [
            { 
                icon: FaChalkboardTeacher, 
                label: "Mengajar", 
                href: "#",
                color: "text-blue-500",
                bgColor: "bg-blue-50"
            },
            { 
                icon: FaClipboardList, 
                label: "Absensi", 
                href: "#",
                color: "text-green-500",
                bgColor: "bg-green-50"
            },
            { 
                icon: FaEdit, 
                label: "Input Nilai", 
                href: "#",
                color: "text-purple-500",
                bgColor: "bg-purple-50"
            },
            { 
                icon: FaUsers, 
                label: "Siswa", 
                href: "#",
                color: "text-orange-500",
                bgColor: "bg-orange-50"
            }
        ],
        orangtua: [
            { 
                icon: FaUserGraduate, 
                label: "Anak", 
                href: "#",
                color: "text-blue-500",
                bgColor: "bg-blue-50"
            },
            { 
                icon: FaChartLine, 
                label: "Perkembangan", 
                href: "#",
                color: "text-green-500",
                bgColor: "bg-green-50"
            },
            { 
                icon: FaComments, 
                label: "Konsultasi", 
                href: "#",
                color: "text-purple-500",
                bgColor: "bg-purple-50"
            },
            { 
                icon: FaFileInvoice, 
                label: "Keuangan", 
                href: "#",
                color: "text-orange-500",
                bgColor: "bg-orange-50"
            }
        ]
    };

    const actions = actionsByRole[role] || actionsByRole.siswa;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Aksi Cepat</h3>
            <div className="grid grid-cols-2 gap-3">
                {actions.map((action, index) => (
                    <a
                        key={index}
                        href={action.href}
                        className="flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-200 hover:bg-neutral-50 hover:border-primary transition-all hover:scale-105"
                    >
                        <div className={`w-12 h-12 ${action.bgColor} rounded-full flex items-center justify-center mb-2`}>
                            <action.icon className={`${action.color} text-xl`} />
                        </div>
                        <span className="text-sm font-medium text-neutral-700">{action.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}