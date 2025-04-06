export interface Coupon {
    id: string;
    name: string;
    status: string;
    externalReference: string;
    description: string;
    discount: {
        value: number;
        type: {
            unit: string;
            currency: string;
        }
    };
    conditions: {
        applies_to: string;
        ids: string[];
        date_range: {
            has_expiration: boolean;
            start_date: Date;
            end_date: Date;
        };
        usage: {
            max_uses: number;
            count_uses: number;
            user_by: any[]
        };
    };
    code: string;
}