import carousels from './carousels'
import miniaturas from './miniaturas'

const data = [
	{
		id: 1,
		title: 'Mendiburú',
		place: 'San Isidro, Lima.',
		date: 'Abril 2021',
		image: miniaturas.image1,
		carousel: carousels.carousel1,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 2,
		title: 'Tamayo',
		place: 'Barranco, Lima.',
		date: 'Abril 2021',
		image: miniaturas.image2,
		carousel: carousels.carousel2,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 3,
		title: 'MSB',
		place: 'San Borja, Lima.',
		date: 'Junio 2021',
		image: miniaturas.image3,
		carousel: carousels.carousel3,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 4,
		title: 'Pasaje Laureles',
		place: 'San Isidro, Lima.',
		date: 'Julio 2021',
		image: miniaturas.image4,
		carousel: carousels.carousel4,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-13.32%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 5,
		title: 'POD',
		place: 'Miraflores, Lima.',
		date: 'Noviembre 2020',
		image: miniaturas.image5,
		carousel: carousels.carousel5,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 6,
		title: 'Holiday Inn',
		place: 'Callao.',
		date: 'Junio 2018',
		image: miniaturas.image6,
		carousel: carousels.carousel6,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-33.3%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-6.896%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 7,
		title: 'Tandem Parc',
		place: 'Breña, Lima.',
		date: 'Julio 2020',
		image: miniaturas.image7,
		carousel: carousels.carousel7,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%] mb-0
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 8,
		title: 'Libertad',
		place: 'Miraflores, Lima.',
		date: 'Marzo 2021',
		image: miniaturas.image8,
		carousel: carousels.carousel8,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-33.3%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-6.896%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 9,
		title: 'Lagunas de Bujama',
		place: 'Bujama, Mala.',
		date: 'Noviembre 2019',
		image: miniaturas.image9,
		carousel: carousels.carousel9,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 10,
		title: 'Humanidades',
		place: 'San Miguel, Lima.',
		date: 'Mayo 2018',
		image: miniaturas.image10,
		carousel: carousels.carousel10,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-33.3%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-6.896%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 11,
		title: 'Las Magnolias',
		place: 'Lince, Lima.',
		date: 'Marzo 2021',
		image: miniaturas.image11,
		carousel: carousels.carousel11,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-6.896%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 12,
		title: 'MMXX',
		place: 'Barranco, Lima.',
		date: 'Junio 2021',
		image: miniaturas.image12,
		carousel: carousels.carousel12,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-13.32%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-17.24%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 13,
		title: 'Grimaldo del Solar',
		place: 'Miraflores, Lima.',
		date: 'Agosto 2020',
		image: miniaturas.image13,
		carousel: carousels.carousel13,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 14,
		title: 'Ugarte y Moscoso',
		place: 'San Isidro, Lima.',
		date: 'Febrero 2021',
		image: miniaturas.image14,
		carousel: carousels.carousel14,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-22.7%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 15,
		title: 'Casa Chincha',
		place: 'Chincha.',
		date: 'Diciembre 2020',
		image: miniaturas.image15,
		carousel: carousels.carousel15,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-6.896%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 16,
		title: 'No name',
		place: 'No place.',
		date: 'Diciembre 2020',
		image: miniaturas.image16,
		carousel: carousels.carousel16,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-13.32%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-6.896%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 17,
		title: 'Salaverry 3636',
		place: 'San Isidro, Lima.',
		date: 'Julio 2021',
		image: miniaturas.image17,
		carousel: carousels.carousel17,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-22.7%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 18,
		title: 'Machaypuito',
		place: 'San Isidro, Lima.',
		date: 'Mayo 2021',
		image: miniaturas.image18,
		carousel: carousels.carousel18,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-6.896%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 19,
		title: 'Ugarte y Moscoso',
		place: 'San Isidro, Lima.',
		date: 'Febrero 2021',
		image: miniaturas.image19,
		carousel: carousels.carousel19,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-17.24%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 20,
		title: 'Los Condores',
		place: 'Cieneguilla, Lima.',
		date: 'Noviembre 2020',
		image: miniaturas.image20,
		carousel: carousels.carousel20,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-22.7%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-6.896%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 21,
		title: 'Interiorismo',
		place: 'No place.',
		date: '2019 - 2021',
		image: miniaturas.image21,
		carousel: carousels.carousel21,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 22,
		title: 'Casa Pucusana',
		place: 'Pucusana.',
		date: 'Febrero 2021',
		image: miniaturas.image22,
		carousel: carousels.carousel22,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-13.32%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-6.896%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 23,
		title: 'Mariano Cornejo',
		place: 'Pueblo Libre, Lima.',
		date: 'Marzo 2021',
		image: miniaturas.image23,
		carousel: carousels.carousel23,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-17.24%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 24,
		title: 'Qualis',
		place: 'Pueblo Libre, Lima.',
		date: 'Septiembre 2020',
		image: miniaturas.image24,
		carousel: carousels.carousel24,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-33.3%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-17.24%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 25,
		title: 'Ugarte y Moscoso',
		place: 'San Isidro, Lima.',
		date: 'Febrero 2021',
		image: miniaturas.image25,
		carousel: carousels.carousel25,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 26,
		title: 'Maqueta',
		place: 'No place.',
		date: 'Julio 2020',
		image: miniaturas.image26,
		carousel: carousels.carousel26,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-13.32%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-81.72%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-17.24%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 27,
		title: 'La Aldea',
		place: 'Oxapampa.',
		date: 'Febrero 2021',
		image: miniaturas.image27,
		carousel: carousels.carousel27,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-27.584%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 28,
		title: 'OFICINAS INTERSEGURO',
		place: 'San Isidro, Lima.',
		date: 'Julio 2018',
		image: miniaturas.image28,
		carousel: carousels.carousel28,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-13.32%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-17.24%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 29,
		title: 'Académicos',
		place: 'No place.',
		date: '2013 - 2021',
		image: miniaturas.image29,
		carousel: carousels.carousel29,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-49.94%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 30,
		title: 'Casa Hamptons',
		place: 'Long Island, New York.',
		date: 'Julio 2021',
		image: miniaturas.image30,
		carousel: carousels.carousel30,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-33.3%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-17.24%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 31,
		title: 'Bello Horizonte',
		place: 'San Borja, Lima.',
		date: 'Junio 2021',
		image: miniaturas.image31,
		carousel: carousels.carousel31,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-22.7%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-27.584%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 32,
		title: 'Tamayo',
		place: 'Barranco, Lima.',
		date: 'Abril 2021',
		image: miniaturas.image32,
		carousel: carousels.carousel32,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-33.3%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-49.94%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-27.584%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 33,
		title: 'Camacho',
		place: 'La Molina, Lima.',
		date: 'Junio 2020',
		image: miniaturas.image33,
		carousel: carousels.carousel33,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 34,
		title: 'Colmena',
		place: 'Miraflores, Lima.',
		date: 'Febrero 2020',
		image: miniaturas.image33,
		carousel: carousels.carousel34,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-53.28%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-9.08%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-17.24%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 35,
		title: 'Café Esan',
		place: 'San Isidro, Lima.',
		date: 'Junio 2018',
		image: miniaturas.image35,
		carousel: carousels.carousel35,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-49.94%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-27.584%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 36,
		title: 'Larapa',
		place: 'Cuzco.',
		date: 'Marzo 2021',
		image: miniaturas.image36,
		carousel: carousels.carousel36,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-53.28%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-37.928%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 37,
		title: 'Rodin 21',
		place: 'No place.',
		date: 'Abril 2021',
		image: miniaturas.image37,
		carousel: carousels.carousel37,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-22.7%]
		xl:w-[20.688%] xl:ml-[27.584%] xl:mt-[-17.24%]`,
		aspectRatio: 'ar3x3',
	},
	{
		id: 38,
		title: 'Elespurú',
		place: 'San Isidro, Lima.',
		date: 'Diciembre 2020',
		image: miniaturas.image38,
		carousel: carousels.carousel38,
		classnames: `w-[75%] ml-[12.5%] mt-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:mt-[-33.3%]
		lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-63.56%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-27.584%] xl:mb-[3.448%]`,
		aspectRatio: 'ar4x6',
	},
	{
		id: 39,
		title: 'Numu',
		place: 'Santiago de Chile.',
		date: 'Octubre 2020',
		image: miniaturas.image39,
		carousel: carousels.carousel39,
		classnames: `w-[75%] ml-[12.5%] my-[12.5%]
		md:w-[39.96%] md:ml-[6.66%] md:my-[6.66%]
		lg:w-[27.24%] lg:ml-[36.32%] lg:mt-[-22.7%] lg:mb-[4.54%]
		xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-27.584%]`,
		aspectRatio: 'ar3x3',
	},
]

export {data}
