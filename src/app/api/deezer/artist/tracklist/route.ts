import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const tracklistUrl = searchParams.get('tracklist')

        if (!tracklistUrl) {
            return NextResponse.json(
                { error: 'No tracklist URL provided' },
                { status: 400 }
            )
        }

        const response = await axios.get(tracklistUrl)
        return NextResponse.json(response.data)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch tracklist' },
            { status: 500 }
        )
    }
}
