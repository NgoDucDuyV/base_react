export const queryKeysCaregory = {
    all: ['caregories'] as const,
    list: () => [...queryKeysCaregory.all, 'list'] as const,
    detail: (id: string) => [...queryKeysCaregory.all, 'detail', id] as const,
}