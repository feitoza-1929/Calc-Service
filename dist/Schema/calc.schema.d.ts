declare const ajv: any;
declare const CalcSchema: {
    type: string;
    properties: {
        values: {
            type: string;
            items: {
                type: string;
            }[];
            minItems: number;
            additionalItems: boolean;
        };
        operator: {
            type: string;
        };
    };
};
declare const validate: any;
