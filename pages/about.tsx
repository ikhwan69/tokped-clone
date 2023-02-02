import React, { FC, useState } from 'react'
import LayoutPage from '../layout/layoutPage'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { decrement, increment, incrementByAmount, selectCount } from '../redux/features/counter'
import Button from '../components/Button/Button'

const About: FC = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState<number>(0);
    return (
        <LayoutPage>
            <h1 className="text-2xl text-center">Halaman About</h1>
            <h2>Nomor sekarang {count}</h2>
            <div className=' flex gap-4 py-3'>
                <input
                    value={incrementAmount}
                    type="number"
                    onChange={(e) => setIncrementAmount(Number(e.target.value))}
                    className="border px-1"
                />
                <Button
                    variant='regular'
                    size='small'
                    title="Increment by amount"
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
                />
            </div>
            <div className='flex gap-4'>
                <Button
                    variant='outline'
                    size='small'
                    title="Decrement by 1"
                    onClick={() => dispatch(decrement())}
                />
                <Button
                    variant='regular'
                    size='small'
                    title="Increment by 1"
                    onClick={() => dispatch(increment())}
                />
            </div>
        </LayoutPage>
    )
}

export default About