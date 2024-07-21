
const labelClasses = 'block mt-4 w-full';
const inputClasses = 'border-4 rounded-lg border-rose-950 w-full py-1 px-2';

function FormField({children,name,textarea,...props}){
    return (
        <div>
            <label htmlFor={name} className={labelClasses}>{children}</label>
            {textarea ?
                <textarea className={inputClasses} name={name} {...props}></textarea>
                :
                <input className={inputClasses} name={name} {...props} />
            }
        </div>
    );
}
export default FormField;