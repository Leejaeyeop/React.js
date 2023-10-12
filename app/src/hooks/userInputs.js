import { useState, useCallback } from "react";

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    // change
    const onChange = useCallback((e) => {
        const { value } = e.target;
        setForm((form) => ({ ...form, username: value }));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;
