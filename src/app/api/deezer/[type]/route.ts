import { NextResponse } from 'next/server'

export async function GET(
    req: Request,
    { params }: { params: { type: string } }
) {
    const { type } = params

    const availableEndpoints: Record<string, string> = {
        playlists: 'https://api.deezer.com/chart/0/playlists',
        tracks: 'https://api.deezer.com/chart/0/tracks',
        artists: 'https://api.deezer.com/chart/0/artists',
        albums: 'https://api.deezer.com/chart/0/albums'
    }

    if (!availableEndpoints[type]) {
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    try {
        const res = await fetch(availableEndpoints[type])
        if (!res.ok) throw new Error('Failed to fetch data')
        const data = await res.json()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        )
    }
}
