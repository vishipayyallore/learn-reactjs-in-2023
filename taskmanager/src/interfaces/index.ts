
export interface TaskInterface {
    id: string;
    title: string;
    description: string;
    status: 'open' | 'in-progress' | 'closed' | 'archived';
    category: 'work' | 'personal' | 'shopping' | 'others';
    priority: 'low' | 'medium' | 'high';
    dateToStart: string;
    dateToEnd: string;
    reference: string;
};

