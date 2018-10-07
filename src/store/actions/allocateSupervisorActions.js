//action creator

export const allocateSupervisor = (intId, supId) => {
    return {
        type: 'ALLOCATE_SUPERVISOR',
        payload: {
            internId: intId,
            supervisorId: Number(supId)
        }
    }
}