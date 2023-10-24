
export interface TaskInterface {
    id: string;
    title: string;
    description: string;
    status: string | 'open' | 'in-progress' | 'closed' | 'archived';
    category: string | 'work' | 'personal' | 'shopping' | 'others';
    priority: string | 'low' | 'medium' | 'high' | 'urgent';
    dateToStart: string;
    dateToEnd: string;
    reference: string;
};

