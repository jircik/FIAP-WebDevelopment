//declarações
const videoElemento = document.getElementById('video');
const botaoScanner = document.getElementById('btn-texto');
const resultado = document.getElementById('resultado');
const canvas = document.getElementById('canvas');

//função para habilitar camera
async function configurarCamera(){
    try{
        videoElemento.srcObject = await navigator.mediaDevices.getUserMedia({
            video: {facingMode: 'environment'}, //camera traseira
            audio: false
        });
        videoElemento.play();
    }catch(err){
        resultado.innerText = 'Erro ao configurar a camera' ,err;
    }
}

configurarCamera();

botaoScanner.onclick = async() => {
    botaoScanner.disable = true;
    resultado.innerText = 'Fazendo Leitura, aguarde...';

    const contexto = canvas.getContext('2d');

    canvas.width = videoElemento.videoWidth;
    canvas.height = videoElemento.videoHeight;

    contexto.setTransform(1, 0, 0, 1, 0, 0);

    contexto.filter = 'contrast(1.2) grayscale(1)';
    try{
        const { data: {text}} = await Tesseract.recognize(
            canvas,
            'por'
        );
        const textoFinal = text.trim();
        resultado.innerText = textoFinal.length > 0 ? textoFinal : 'Não foi possível identificar o texto';

    } catch(err){
        console.error(err);
        resultado.innerText = 'Erro ao processar' ,err;
    } finally{
        botaoScanner.disable = false;
    }
}