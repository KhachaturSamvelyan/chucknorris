export const getApi = async (url : string) => {
	try {
		const res = await fetch(url);

		if (!res.ok) {
			console.error('Ошибка', res.status);
			return false;
		}

		return await res.json();
        
	} catch (error : any) {
		console.error('Ошибка', error.message);
		return false;
	}
}
