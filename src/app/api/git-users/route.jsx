
export async function GET (request,{params}) {
    const response = await fetch("https://api.github.com/users");
    const user = await response.json();

    return NextResponse.json(users);
}