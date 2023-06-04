import { Container, Logo, UserIcon } from './styles';

import perfil from '@assets/perfil.png';
import logo from '@assets/logo.png';

export function Header() {
    
	return (
		<Container>
			<Logo source={ logo } />

			<UserIcon source={ perfil } />
		</Container>
	);
}