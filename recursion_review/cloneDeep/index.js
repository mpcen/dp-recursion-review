// Write your own version of lodash's clondeDeep, recursively

function cloneDeep(obj, copy = {}) {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'string' || typeof obj[prop] === 'number') {
            copy[prop] = obj[prop];
        } else if (Array.isArray(obj[prop])) {
            copy[prop] = obj[prop].map(v => cloneDeep(v, copy[prop]));
        } else {
            copy[prop] = cloneDeep(obj[prop], copy[prop]);
        }
    });

    return copy
}

const obj = {
    p1: 'p1',
    p2: 'p2',
    p3: {
        p4: 'p4',
        p5: 'p5',
        p6: {
            p7: 'p7',
            p8: 'p8',
            p9: {
                p10: 'p10',
                p11: 'p11',
                p12: {
                    p13: 'p13',
                    p14: 'done'
                }
            }
        }
    }
}

const objWithArray = {
    p1: 'p1',
    p2: 'p2',
    p3: [{
            id: 1,
            name: 'manny',
            contact: [{
                email: 'm1@m1.com'
            }]
        },
        {
            id: 2,
            name: 'mariya',
            contact: [{
                email: 'm2@m2.com'
            }]
        },
        {
            id: 3,
            name: 'vincent',
            contact: [{
                email: 'v@v.com'
            }]
        }
    ]
};

cloneDeep(objWithArray);