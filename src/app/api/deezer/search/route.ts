import { NextResponse } from 'next/server'
import axios from 'axios'

const BASE_URL = 'https://api.deezer.com/search'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('q')

    if (!query) {
        return NextResponse.json(
            { error: 'No search query provided' },
            { status: 400 }
        )
    }
    try {
        const { data } = await axios.get(BASE_URL, {
            params: { q: query },
            headers: { 'Content-Type': 'application/json' }
        })
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        )
    }
}
