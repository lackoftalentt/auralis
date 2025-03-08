import axios from 'axios'
import { NextResponse } from 'next/server'

const BASE_URL = 'https://api.deezer.com/chart/0'

export async function GET(
    req: Request,
    { params }: { params: { type: string } }
) {
    const { type } = params

    const availableEndpoints: Record<string, string> = {
        playlists: `${BASE_URL}/playlists`,
        tracks: `${BASE_URL}/tracks`,
        artists: `${BASE_URL}/artists`,
        albums: `${BASE_URL}/albums`
    }

    if (!availableEndpoints[type]) {
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    try {
        const { data } = await axios.get(availableEndpoints[type])
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        )
    }
}
