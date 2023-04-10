import React from 'react'
import styled from 'styled-components'

export default function SelectGenre({ genres, type }) {
    return (
        <Select className='flex'>
            <select>
                {
                    genres.map((genre) => {
                        return <option value={genre.id} key={genre.id}>
                            {genre.name}
                        </option>
                    })
                }
            </select>
        </Select>
    )
}

const Select = styled.div``;