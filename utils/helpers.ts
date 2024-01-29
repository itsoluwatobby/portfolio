export function toggleAttributes(parsedObj: Partial<TargetDisplayType>, toggleValue: boolean): Partial<TargetDisplayType> {
  return Object.fromEntries(Object.keys(parsedObj).map(key => [key, toggleValue]));
}

export const switchModals: Record<Displays, (arg: TargetDisplayType) => TargetDisplayType> = {
  'skills'(prev: TargetDisplayType){
    const { skills, ...rest } = prev
    return { skills, ...toggleAttributes(rest, false) } as TargetDisplayType
  },
  'experience'(prev: TargetDisplayType){
    const { experience, ...rest } = prev
    return { experience, ...toggleAttributes(rest, false) } as TargetDisplayType
  },
  'education'(prev: TargetDisplayType){
    const { education, ...rest } = prev
    return { education, ...toggleAttributes(rest, false) } as TargetDisplayType
  }
}