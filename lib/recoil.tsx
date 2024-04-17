import { TerminalBoxProps } from '@/types'
import { atom } from 'recoil'

export const terminalsAtom = atom({
    default: [] as  TerminalBoxProps[],
    key: "terminals"
})