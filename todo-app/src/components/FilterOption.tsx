import React from 'react'

export const FilterOption = ({option}:{option: string}) => <option key={option} value={option} className={`status-${option}`}>{option}</option>
