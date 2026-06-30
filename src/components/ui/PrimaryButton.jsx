export default function PrimaryButton({children, ...props}){

    return(

        <button
            {...props}
            className="px-6 py-3 rounded-2xl text-white transition hover:scale-105"
            style={{ background:"var(--primary)"}}>
            {children}
        </button>

    )

}