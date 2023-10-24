
export interface TaskInterface {
    id: string;
    title: string;
    description: string;
    status: 'open' | 'in-progress' | 'completed' | 'archived';
    category: 'work' | 'personal' | 'shopping' | 'others';
    priority: 'low' | 'medium' | 'high';
    dateToStart: string;
    dateToEnd: string;
    reference: string;
    // createdAt: Date;
    // updatedAt: Date;
};

