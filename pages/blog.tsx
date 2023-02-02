import React, { FC } from 'react'
import LayoutPage from '../layout/layoutPage'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getKanyeQuote, kanyeQuoteSelector } from '../redux/features/kanye'
import Button from '../components/Button/Button'

const Blog: FC = () => {
    const dispatch = useAppDispatch()
    const { data, isLoading, isError, } = useAppSelector(kanyeQuoteSelector)
    return (
        <LayoutPage>
            <div className='text-center'>
                <h2>Generate random Kanye West quote</h2>
                {isLoading && <p>Loading...</p>}
                {data && <p>{data.quote}</p>}
                {isError && <p>Oops, something went wrong</p>}
                <div className="py-5">
                    <Button
                        variant='outline'
                        size='small'
                        title="Generate Kanye quote"
                        onClick={() => dispatch(getKanyeQuote())}
                    />
                </div>
            </div>
        </LayoutPage>
    )
}

export default Blog