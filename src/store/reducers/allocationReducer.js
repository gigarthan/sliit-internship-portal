
const initState = {
    companies: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' }
    ],
    supervisors: [
        { id: 10, name: 'Max', email: 'max@example.com', companyId: 1 },
        { id: 11, name: 'Bob', email: 'bob@example.com', companyId: 1 },
        { id: 12, name: 'Mat', email: 'mat@example.com', companyId: 2 },
        { id: 13, name: 'Jim', email: 'jim@example.com', companyId: 2 },
        { id: 14, name: 'Mary', email: 'mary@example.com', companyId: 3 },
        { id: 15, name: 'Mike', email: 'mike@example.com', companyId: 3 },
        { id: 16, name: 'Steve', email: 'steve@example.com', companyId: 3 }
    ],
    interns: [
        { id: 100, name: 'Jane', email: 'jem@example.com', phone: '0771454787', companyId: 1, supervisor: 10 },
        { id: 101, name: 'John', email: 'jom@example.com', phone: '0775123547', companyId: 1, supervisor: 11 },
        { id: 102, name: 'Jill', email: 'jill@example.com', phone: '0774712010', companyId: 2, supervisor: 12 },
        { id: 103, name: 'Tim', email: 'tin@example.com', phone: '0772571554', companyId: 3, supervisor: null },
        { id: 104, name: 'Adam', email: 'adan@example.com', phone: '0771101482', companyId: 3, supervisor: 15 }
    ]
}

const allocationReducer = (state = initState, action) => {


    if (action.type === 'ALLOCATE_SUPERVISOR') {

        let newInterns = [...state.interns];
        let selectedInternIndex = newInterns.findIndex(intern => intern.id === action.payload.internId);
        let selectedIntern = newInterns.find(intern => intern.id === action.payload.internId);
        newInterns.splice(selectedInternIndex, 1, { ...selectedIntern, supervisor: action.payload.supervisorId });

        return {
            ...state,
            interns: newInterns
        }
    }

    return state;
}



export default allocationReducer;