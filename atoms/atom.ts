import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { title } from 'process'
import React from 'react'

export const listNotesAtom = atom([
    {
        id: 1,
        title: 'Draft Database Schema',
        notes: 'Define the initial tables for users, tasks, and tags. Ensure proper indexing for foreigkjsfksdflksdflsdlfsldfs;'
    },
    {
        id: 2,
        title: 'Update Project README',
        notes: 'Add installation instructions, environment variable setup, and a brief architecturalsjfjlsdhfkjsdfkjlsd'
    },
    {
        id: 3,
        title: 'Update Project README',
        notes: 'Add installation instructions, environment variable setup, and a brief architectural ahsfhasdofhasdofhoasd'
    },
    {
        id: 4,
        title: 'Update Project README',
        notes: 'Add installation instructions, environment variable setup, and a brief architectura lhsfshddfhsdfosd'
    },
    {
        id: 5,
        title: 'Update Project README',
        notes: 'Add installation instructions, environment variable setup, and a brief architecturakjhfjshdfhsdlflsdlflsd'
    },
    {
        id: 6,
        title: 'Update Project README',
        notes: 'Add installation instructions, environment variable setup, and a brief architecturakjsfjksdfklsdj;fds'
    },
    {
        id: 7,
        title: 'Update Project README',
        notes: 'Add installation instructions, environment variable setup, and a brief architecturalknfnjsdfksdf'
    },
    {
        id: 8,
        title: 'Update Project README',
        notes: 'Add installation instructions, environment variable setup, and a brief architecturasfkjsdfkjsdkjfds'
    },
    {
        id: 9,
        title: 'Update Project README',
        notes: 'Add installation instructions, environment variable setup, and a brief architecturalksnfjksdkfsdlk'
    },
])

// export const allNotesAtom = atomWithStorage<{id:number, title: string, notes: string}[]>('atoms', [{
//     id: 0 ,
//     title: '',
//     notes: ''
// }]);