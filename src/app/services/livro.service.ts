import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Colecao } from '../models/colecao';
import { Genero } from '../models/genero';
import { Livro } from '../models/livro';

const LIVROS = [
  {
    '_id': 'qwertyuiop1234567',
    'genero': {
      'codigo': 1,
      'genero': 'Aventura'
    },
    'livros': [
      {
        'codigo': 1,
        'nome': 'Mau Começo - Vol. 1 - Col. Desventuras Em Série',
        'autor': 'Snicket,Lemony',
        'sinopse': 'Mau começo é o primeiro volume de uma série em que Lemony Snicket conta as desventuras dos irmãos Baudelaire. Violet, Klaus e Sunny são encantadores e inteligentes, mas ocupam o primeiro lugar na classificação das pessoas mais infelizes do mundo. De fato, a infelicidade segue os seus passos desde a primeira página, quando eles estão na praia e recebem uma trágica notícia. Esses ímãs que atraem desgraças terão de enfrentar, por exemplo, roupas que pinicam o corpo, um gosmento vilão dominado pela cobiça, um incêndio calamitoso e mingau frio no café da manhã. É por isso que, logo na quarta capa, Snicket avisa ao leitor: Não há nada que o impeça de fechar o livro imediatamente e sair para uma outra leitura sobre coisas felizes, se é isso que você prefere.',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12100536/1008977922.jpg?v=637142217106670000'
      },
      {
        'codigo': 2,
        'nome': 'A Sala dos Répteis - Vol. 2 - Col. Desventuras em Série',
        'autor': 'Snicket,Lemony',
        'sinopse': 'Lemony Snicket é um autor que não pode ser acusado de falta de franqueza. Sabe que nem todo mundo suporta as tristezas que ele conta e por isso - para que depois ninguém reclame - faz questão de avisar: Se você esperava encontrar uma história tranqüila e alegre, lamento dizer que escolheu o livro errado. A história pode parecer animadora no início, quando os meninos Baudelaire passam o tempo em companhia de alguns répteis interessantes e de um tio alto-astral, mas não se deixem enganar... . Os Baudelaire têm mesmo uma incrível má sorte, mas pode-se afirmar que a vida deles seria bem mais fácil se não tivessem de enfrentar o tempo todo as armadilhas de seu arquiinimigo: o conde Olaf, um homem revoltante, gosmento e pérfido. Em "Mau Começo" ele deu uma pequena amostra do que é capaz de fazer para infernizar a vida de Violet, Klaus e Sunny Baudelaire - e aqui as coisas só pioram.',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/5597309/1008970594.jpg?v=637061865663200000'
      },
      {
        'codigo': 3,
        'nome': 'O Lago das Sanguessugas - Vol. 3 - Col. Desventuras em Série',
        'autor': 'Snicket,Lemony',
        'sinopse': 'O misterioso autor das Desventuras em Série não só alcançou a lista de best-sellers infanto-juvenis do New York Times, como conseguiu entrar em todas as outras principais referências de vendagem americanas. Com sua estranha franqueza, na contracapa deste livro ele manda um recado a seus possíveis leitores: "Se você ainda não leu nada sobre os órfãos Baudelaire, é preciso que antes mesmo de começar a primeira frase deste livro fique sabendo o seguinte: Violet, Klaus e Sunny são legais e superinteligentes, mas a vida deles, lamento dizer, está repleta de má sorte e infelicidade. Todas as histórias sobre essas três crianças são uma tristeza e uma verdadeira desgraça, e a que você tem nas mãos talvez seja a pior de todas. Se você não tem estômago para engolir uma história que inclui um furacão, uma invenção para sinalizar pedidos de socorro, sanguessugas famintas, caldo frio de pepinos, um horrendo vilão e uma boneca chamada Perfeita Fortuna, é provável que se desespere ao ler este livro. Continuarei a registrar essas histórias trágicas, pois é o que sei fazer. Cabe a você, no entanto, decidir se verdadeiramente será capaz de suportar esta história de horrores". Respeitosamente. Lemony Snicket.',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12100567/1008977622.jpg?v=637142217190570000'
      }
    ]
  },
  {
    '_id': 'qwertyuiop1234567',
    'genero': {
      'codigo': 2,
      'genero': 'Romance'
    },
    'livros': [
      {
        'codigo': 4,
        'nome': 'O Duque e Eu - Os Bridgertons - Vol. 1',
        'autor': 'Quinn,Julia',
        'sinopse': '“Julia Quinn é nossa Jane Austen contemporânea.” – Jill Barnett“Inteligente e divertido.” – revista TimeSimon Basset, o irresistível duque de Hastings, acaba de retornar a Londres depois de seis anos viajando pelo mundo. Rico, bonito e solteiro, ele é um prato cheio para as mães da alta sociedade, que só pensam em arrumar um bom partido para suas filhas.Simon, porém, tem o firme propósito de nunca se casar. Assim, para se livrar das garras dessas mulheres, precisa de um plano infalível.É quando entra em cena Daphne Bridgerton, a irmã mais nova de seu melhor amigo. Apesar de espirituosa e dona de uma personalidade marcante, todos os homens que se interessam por ela são velhos demais, pouco inteligentes ou destituídos de qualquer tipo de charme. E os que têm potencial para ser bons maridos só a veem como uma boa amiga.A ideia de Simon é fingir que a corteja. Dessa forma, de uma tacada só, ele conseguirá afastar as jovens obcecadas por um marido e atrairá vários pretendentes para Daphne. Afinal, se um duque está interessado nela, a jovem deve ter mais atrativos do que aparenta.Mas, à medida que a farsa dos dois se desenrola, o sorriso malicioso e os olhos cheios de desejo de Simon tornam cada vez mais difícil para Daphne lembrar que tudo não passa de fingimento. Agora ela precisa fazer o impossível para não se apaixonar por esse conquistador inveterado que tem aversão a tudo o que ela mais quer na vida.Primeiro dos oito livros da série Os Bridgertons, O duque e eu é uma bela história sobre o poder do amor, contada com o senso de humor afiado e a sensibilidade que são marcas registradas de Julia Quinn, autora com 8 milhões de exemplares vendidos.',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/31734222/1011001308.jpg?v=637426145305970000'
      },
      {
        'codigo': 5,
        'nome': 'Tudo Que Acontece Aqui Dentro - Cartas De Amor Nunca Rasgadas',
        'autor': 'Hermann,Julio',
        'sinopse': 'Amar e afogar-se com os próprios sentimentos e continuar respirando Tudo o que acontece aqui dentro é uma seleção de crônicas sobre o amor em seus diversos estágios, sobre aprender com as experiências da vida... trata-se de um tipo de testamento das coisas do coração. É também um romance narrado pelas memórias de quem as viveu, por cartas que deveriam ter sido rasgadas, registros dos sentimentos pessoais de quem revelou bem mais de si que a maioria de todos nós. Uma das coisas mais bonitas é a maneira com que vamos enfeitando a alma enquanto esperamos alguém chegar "São cartas que escrevi enquanto ainda sentia a ferida arder. Os momentos felizes e os dias em que pensei que não iria aguentar”. Júlio tem um dom. Ele consegue exprimir sobre sentimentos com muita beleza e, ao compartilhar em escritos, permite que nós também possamos nomear o que muitas vezes sentimos e ficamos de algum modo aflitos, por não compreender. É o momento em que o nosso coração encontra a paz. Ele transforma o grito preso nas gargantas em literatura. São linhas que costuram o aprendizado sobre amor com o olhar de uma geração.',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12111759/1006577667.jpg?v=637142258316100000'
      }
    ]
  },
  {
    '_id': 'qwertyuiop1234567',
    'genero': {
      'codigo': 3,
      'genero': 'Mistério'
    },
    'livros': [
      {
        'codigo': 6,
        'nome': 'Arthur Conan Doyle - Histórias De Horror e Mistério',
        'autor': 'Arthur Conan Doyle',
        'sinopse': 'Novo livro de poemas de um dos artistas mais inventivos da atualidade. ?aqui jaz/ o presente// eterno porque eterna// mente fugaz?, escreve Arnaldo Antunes. Em seu novo livro, o compositor e poeta mistura poemas, poemas visuais e fotografias para falar sobre o tempo ? o presente e também o passado: ?não tenho saudades/ do que vivi// porque tudo/ está aqui?. O isolamento, o noticiário e a política são eixos centrais desses versos que, com humor e sensibilidade, impressionam por sua atualidade e contundência. Para Noemi Jaffe: ?Naquele que talvez tenha sido o ano mais difícil de nossas vidas, ano de pandemia e de esboço de ditadura, Algo antigo repercute a solidão de cada um ?isolado/ por um exército de desertos?, cada um como uma ?multidão amputada?. Mas é ?enfiando a adaga do sentido na palavra? que cada uma dessas multidões recupera e refaz seus sentidos possíveis, prontos para o que foi, é e virá a ser.?. Cover design or artwork by Antunes, Arnaldo Cover design or artwork by Xavier, Marcia',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/31734606/1011003012.jpg?v=637429360758370000'
      },
      {
        'codigo': 7,
        'nome': 'Gravity Falls - Um Verão De Mistérios',
        'autor': 'Lockard,Greg',
        'sinopse': 'O mundo contemporâneo é o do exílio e não o da pátria, o da errância e não o do lugar. Razão pela qual nosso tempo foi denominado de ?século breve?, em que os acontecimentos e os desaparecimentos de modos de vida e valores são acelerados, não permitindo o repouso para constituição de uma memória reparadora. Exílio, expatriamento e dispersão espacial são, pois, o emblema das migrações forçadas por guerras, perseguições políticas e diferentes formas de conflito, que produzem a ?nostalgia do inteiramente outro? diante da ?vida mutilada?. Assim, a diferença entre duas figuras: a da viagem e a da partida, a odisseia e o êxodo, uma que vive no horizonte de um retorno, outra que anseia por uma pátria que não existe mais. A viagem contemporânea para uma terra de exílio tem algo de enigmático, pois populações inteiras atravessam os mares, assombradas pelos naufrágios e pela incerteza da chegada ou do encontro de um não lugar.Herdeiro problemático de um duplo trauma ? o do extermínio dos judeus europeus durante o nazismo e, simultaneamente, o da expulsão dos palestinos de sua terra com a criação do Estado de Israel ? Edward Saïd, um dos mais importantes intelectuais palestinos, refletiu sobre a questão da identidade em situações de exílio e estranhamento cultural, procedendo a uma genealogia do sentimento de desorientação, desrealização e perda de si que o exílio produz. Pois se, antes, cada um de nós tem o conforto de paisagens conhecidas, o aconchego do mundo entre os seus, o país estrangeiro representa a passagem do conhecido ao desconhecido, significa o enfrentamento de um incerto acolhimento, com incompreensões, desprezo e hostilidade do lugar a que se chegou. Reunindo, assim, sua formação de scholar em literatura nos Estados Unidos e de musicólogo e pensador geopolítico, Edward Saïd refletiu sobre a construção de um Oriente pelo Ocidente, pelo medium de escritores nos quais há a personagem fantasmada do Outro.',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12116061/1008013975.jpg?v=637142273952130000'
      }
    ]
  },
  {
    '_id': 'qwertyuiop1234567',
    'genero': {
      'codigo': 4,
      'genero': 'Fantasia'
    },
    'livros': [
      {
        'codigo': 8,
        'nome': 'O Silmarillion',
        'autor': 'Tolkien,J.R.R.',
        'sinopse': '"O Silmarillion" é um relato dos Dias Antigos da Primeira Era do mundo criado por J.R.R. Tolkien. É a história longínqua para a qual os personagens de "O Senhor dos Anéis" e "O Hobbit" olham para trás, e em cujos eventos alguns deles, como Elrond e Galadriel, tomaram parte. Os contos de "O Silmarillion" se passam em uma época em que Morgoth, o Primeiro Senhor Sombrio, habitava a Terra-média, e os Altos-Elfos guerreavam contra ele pela recuperação das Silmarils, as joias que continham a pura luz de Valinor.O livro começa com "O Ainulindalë", o mito da criação do Universo, seguido pelo "Valaquenta", onde estão descritas a natureza e os poderes de cada um dos deuses. O "Akallâbeth" narra o apogeu e a queda do reino da grande ilha de Númenor no final da Segunda Era e "Dos Anéis de Poder" fala dos grandes eventos no final da Terceira Era, como narrado em "O Senhor dos Anéis".',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12114592/1008609237.jpg?v=637142268557100000'
      },
      {
        'codigo': 9,
        'nome': 'A Dança Dos Dragões - As Crônicas de Gelo e Fogo',
        'autor': 'Martin,George R. R.',
        'sinopse': 'A Dança dos Dragões O futuro dos Sete Reinos ainda é incerto - novas ameaças e novos inimigos surgem a cada momento. Além do Mar Estreito, Daenerys Targaryen, a última herdeira da Casa Targaryen, governa uma cidade construída sobre o pó e a morte. Mas seus inimigos são cada vez mais numerosos e farão de tudo para destruí-la. Enquanto isso, dois jovens embarcam em missões distintas, mas que podem mudar o destino da Mãe dos Dragões. No Norte, Jon Snow - 998º Senhor Comandante da Patrulha da Noite - fará de tudo para garantir a segurança da Muralha. Para isso, não hesitará em transformar amigos em inimigos e vice-versa. Traições, revelações e um fantasma do passado que volta para assombrar quando menos se espera: em todos os cantos de Westeros e de Essos, mercadores, foras da lei, mestres, reis, nobres, escravos, soldados e troca-peles estão prestes a encarar fatos inesperados. Alguns fracassarão, outros se aproveitarão das forças sombrias que crescem cada vez mais. Mas, neste momento de inquietude crescente, as marés da política e do destino levarão inevitavelmente à maior dança de todas.',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12106275/1002912388.jpg?v=637142237396400000'
      }
    ]
  },
  {
    '_id': 'qwertyuiop1234567',
    'genero': {
      'codigo': 5,
      'genero': 'Terror'
    },
    'livros': [
      {
        'codigo': 10,
        'nome': 'Doutor Sono',
        'autor': 'King,Stephen',
        'sinopse': 'Mais de trinta anos depois, Stephen King revela a seus leitores o que aconteceu a Danny Torrance, o garoto no centro de O iluminado, depois de sua terrível experiência no Overlook Hotel. Em Doutor Sono, King dá continuidade a essa história, contando a vida de Dan, agora um homem de meia-idade, e Abra Stone, uma menina de 12 anos com um grande poder. Assombrado pelos habitantes do Overlook Hotel, onde passou um ano terrível de sua infância, Dan ficou à deriva por décadas, desesperado para se livrar do legado de alcoolismo e violência do pai. Finalmente, ele se instala em uma cidade de New Hampshire, onde encontra abrigo em uma comunidade do Alcoólicos Anônimos que o apoia e um emprego em uma casa de repouso, onde seu poder remanescente da iluminação fornece o conforto final para aqueles que estão morrendo. Ajudado por um gato que prevê a morte dos pacientes, ele se torna o “Doutor Sono”. Então Dan conhece Abra Stone, uma menina com um dom espetacular, a iluminação mais forte que já se viu. Ela desperta os demônios de seu passado e Dan se vê envolvido em uma batalha pela alma e sobrevivência dela. Uma guerra épica entre o bem e o mal, uma sangrenta e gloriosa história que vai emocionar os milhões de fãs de O Iluminado e satisfazer os leitores deste novo clássico da obra de King.',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12104998/1009032328.jpg?v=637142232337100000'
      },
      {
        'codigo': 11,
        'nome': 'It - A Coisa',
        'autor': 'King,Stephen',
        'sinopse': 'Um delicado poema que conta, com simplicidade, a força e a importância das palavras.',
        'capa': 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12104715/1008975660.jpg?v=637142231219470000'
      }
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }

  public get(): Observable<Colecao[]>{
    return of(LIVROS).pipe(
      delay(0),
      map( arr => {
          return arr.map( l => {
            return new Colecao(
              l._id,
              new Genero( l.genero.codigo, l.genero.genero ),
              l.livros.map( x => new Livro(
                x.codigo,
                x.nome,
                x.autor,
                x.sinopse,
                x.capa
              ))
            )
          })
        }
      )
    )
  }

}

