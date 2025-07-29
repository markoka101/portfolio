import axios from 'axios';
import { encode } from '../utils/netlifyFormEncode';

export async function submitNetlifyForm(form: Record<string, string>) {
	return axios.post('/', encode({ 'form-name': 'contact', ...form }), {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	});
}
