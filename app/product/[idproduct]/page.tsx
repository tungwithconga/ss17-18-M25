import type { Metadata, ResolvingMetadata } from 'next'
import { disconnect } from 'process'
type Props = {
    params: { idproduct: string }

}
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.idproduct
    // fetch data
    const product = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    return {
        title: product.name,
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
        description: `mô tả sản phẩm có id là : ${product.id}`
    }
}

export default function Page({ params }: Props) {
    return (
        <div>
            SEO với phương thức generateMetadata
        </div>
    )
}