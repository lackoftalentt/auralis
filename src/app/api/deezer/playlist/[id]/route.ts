import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params
        const response = await axios.get(
            `https://api.deezer.com/playlist/${id}`
        )

        return NextResponse.json(response.data)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch artist data' },
            { status: 500 }
        )
    }
}
