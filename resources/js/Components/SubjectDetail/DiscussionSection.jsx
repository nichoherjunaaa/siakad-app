// resources/js/Components/SubjectDetail/DiscussionSection.jsx
import { useState } from 'react';

export default function DiscussionSection() {
    const [discussions] = useState([
        {
            id: 1,
            title: 'Kesulitan memahami konsep limit tak hingga',
            author: 'Bambang Pratama',
            date: '7 Des 2023',
            time: '14:30',
            content: 'Saya mengalami kesulitan dalam memahami konsep limit ketika x mendekati tak hingga. Apakah ada cara mudah untuk memahaminya?',
            replies: 8,
            views: 42,
            tags: ['limit', 'konsep', 'bantuan'],
            isResolved: true
        },
        {
            id: 2,
            title: 'Teknik integrasi substitusi',
            author: 'Siti Nurhaliza',
            date: '6 Des 2023',
            time: '10:15',
            content: 'Saya ingin bertanya tentang teknik integrasi substitusi. Kapan kita harus menggunakan teknik ini dan bagaimana cara menentukan substitusi yang tepat?',
            replies: 5,
            views: 28,
            tags: ['integral', 'substitusi', 'teknik'],
            isResolved: false
        },
        {
            id: 3,
            title: 'Perbedaan turunan implisit dan eksplisit',
            author: 'Dewi Lestari',
            date: '5 Des 2023',
            time: '16:45',
            content: 'Bisa tolong jelaskan perbedaan antara turunan implisit dan eksplisit beserta contoh penggunaannya?',
            replies: 3,
            views: 35,
            tags: ['turunan', 'implisit', 'eksplisit'],
            isResolved: true
        },
        {
            id: 4,
            title: 'Aplikasi turunan dalam kehidupan sehari-hari',
            author: 'Rizky Maulana',
            date: '4 Des 2023',
            time: '09:20',
            content: 'Selain dalam matematika murni, di bidang apa lagi konsep turunan banyak diterapkan? Bisa berikan contoh konkritnya?',
            replies: 12,
            views: 58,
            tags: ['aplikasi', 'turunan', 'kehidupan'],
            isResolved: false
        }
    ]);

    const [newTopic, setNewTopic] = useState('');
    const [expandedDiscussion, setExpandedDiscussion] = useState(null);

    const toggleExpand = (discussionId) => {
        setExpandedDiscussion(expandedDiscussion === discussionId ? null : discussionId);
    };

    const handleCreateTopic = () => {
        if (newTopic.trim()) {
            console.log('Create new topic:', newTopic);
            setNewTopic('');
            // Implement create topic functionality
        }
    };

    const handleReply = (discussion) => {
        console.log('Reply to discussion:', discussion);
        // Implement reply functionality
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            <div className="p-6 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-neutral-900">Forum Diskusi</h3>
                        <p className="text-sm text-neutral-600 mt-1">
                            {discussions.length} topik diskusi • {discussions.filter(d => !d.isResolved).length} belum terjawab
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="Buat topik diskusi baru..."
                                value={newTopic}
                                onChange={(e) => setNewTopic(e.target.value)}
                                className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                            />
                            <button
                                onClick={handleCreateTopic}
                                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                            >
                                <i className="fas fa-plus mr-2"></i>
                                Buat Topik
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Discussions List */}
            <div className="divide-y divide-neutral-200">
                {discussions.map((discussion) => (
                    <div key={discussion.id} className="p-6 hover:bg-neutral-50">
                        <div className="flex items-start">
                            {/* Discussion Status */}
                            <div className="mr-4">
                                {discussion.isResolved ? (
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <i className="fas fa-check text-green-600"></i>
                                    </div>
                                ) : (
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <i className="fas fa-question text-yellow-600"></i>
                                    </div>
                                )}
                            </div>

                            {/* Discussion Content */}
                            <div className="flex-1">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg text-neutral-900 mb-2">
                                            {discussion.title}
                                        </h4>
                                        <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                                            {discussion.content}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="text-right">
                                            <div className="text-sm font-medium text-neutral-900">{discussion.author}</div>
                                            <div className="text-xs text-neutral-500">{discussion.date} • {discussion.time}</div>
                                        </div>
                                        <button
                                            onClick={() => toggleExpand(discussion.id)}
                                            className="p-2 rounded-lg hover:bg-neutral-100"
                                        >
                                            <i className={`fas fa-chevron-${expandedDiscussion === discussion.id ? 'up' : 'down'} text-neutral-600`}></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Discussion Stats */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center text-sm text-neutral-600">
                                            <i className="fas fa-comment mr-1"></i>
                                            <span>{discussion.replies} balasan</span>
                                        </div>
                                        <div className="flex items-center text-sm text-neutral-600">
                                            <i className="fas fa-eye mr-1"></i>
                                            <span>{discussion.views} dilihat</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {discussion.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleReply(discussion)}
                                        className="px-3 py-1 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50"
                                    >
                                        <i className="fas fa-reply mr-1"></i>
                                        Balas
                                    </button>
                                </div>

                                {/* Expanded Content */}
                                {expandedDiscussion === discussion.id && (
                                    <div className="mt-4 pt-4 border-t border-neutral-200">
                                        {/* Replies */}
                                        <div className="space-y-4">
                                            {/* Example Reply 1 */}
                                            <div className="p-4 bg-neutral-50 rounded-lg">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                                                        <i className="fas fa-user-tie text-primary text-sm"></i>
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-sm text-neutral-900">Bu Sari, S.Pd.</div>
                                                        <div className="text-xs text-neutral-500">7 Des 2023 • 15:45</div>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-neutral-700 mb-3">
                                                    Untuk memahami limit tak hingga, coba bayangkan nilai x yang semakin besar. Contoh: lim(x→∞) 1/x = 0 karena semakin besar x, nilai 1/x semakin mendekati 0.
                                                </p>
                                                <div className="flex items-center text-sm text-neutral-600">
                                                    <button className="flex items-center mr-4">
                                                        <i className="fas fa-thumbs-up mr-1"></i>
                                                        <span>12</span>
                                                    </button>
                                                    <button className="flex items-center">
                                                        <i className="fas fa-thumbs-down mr-1"></i>
                                                        <span>0</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Example Reply 2 */}
                                            <div className="p-4 bg-blue-50 rounded-lg ml-8">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                        <i className="fas fa-user text-blue-600 text-sm"></i>
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-sm text-neutral-900">Ahmad Rizki</div>
                                                        <div className="text-xs text-neutral-500">7 Des 2023 • 16:30</div>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-neutral-700 mb-3">
                                                    Terima kasih Bu penjelasannya. Jadi intinya kita lihat trend nilainya ya ketika x semakin besar?
                                                </p>
                                            </div>

                                            {/* Add Reply */}
                                            <div className="ml-8">
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex-1">
                                                        <input
                                                            type="text"
                                                            placeholder="Tulis balasan..."
                                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                                        />
                                                    </div>
                                                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                                                        <i className="fas fa-paper-plane"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {discussions.length === 0 && (
                <div className="p-12 text-center">
                    <i className="fas fa-comments text-4xl text-neutral-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-neutral-700 mb-2">Belum ada diskusi</h3>
                    <p className="text-neutral-500">Mulai diskusi pertama untuk mata pelajaran ini.</p>
                </div>
            )}
        </div>
    );
}