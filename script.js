// Estado global do jogo
let gameState = {
    currentExercise: 0,
    score: 0,
    level: 1,
    streak: 0,
    startTime: null,
    exerciseStartTime: null,
    completedExercises: [],
    unlockedConcepts: [],
    achievements: [],
    chatHistory: []
};

// Base de dados de exercícios
const exercises = [
    {
        id: 1,
        title: "Primeiro Programa",
        difficulty: "iniciante",
        objective: "Crie seu primeiro programa Java que imprime 'Olá, Mundo!' na tela.",
        hint: "Use System.out.println() para imprimir texto. Lembre-se de colocar o texto entre aspas duplas.",
        solution: `public class MeuPrimeiroPrograma {
    public static void main(String[] args) {
        System.out.println("Olá, Mundo!");
    }
}`,
        template: `public class MeuPrimeiroPrograma {
    public static void main(String[] args) {
        // Escreva seu código aqui
        
    }
}`,
        expectedOutput: "Olá, Mundo!",
        concept: "Sintaxe Básica",
        points: 50
    },
    {
        id: 2,
        title: "Variáveis e Tipos",
        difficulty: "iniciante",
        objective: "Declare uma variável do tipo int chamada 'idade' com valor 25 e imprima seu valor.",
        hint: "Use 'int idade = 25;' para declarar e inicializar a variável. Depois use System.out.println(idade) para imprimir.",
        solution: `public class Variaveis {
    public static void main(String[] args) {
        int idade = 25;
        System.out.println(idade);
    }
}`,
        template: `public class Variaveis {
    public static void main(String[] args) {
        // Declare a variável idade aqui
        
        // Imprima o valor da variável aqui
        
    }
}`,
        expectedOutput: "25",
        concept: "Variáveis",
        points: 75
    },
    {
        id: 3,
        title: "Operações Matemáticas",
        difficulty: "iniciante",
        objective: "Calcule e imprima o resultado de 10 + 5 * 2.",
        hint: "Lembre-se da precedência dos operadores: multiplicação antes da adição. Use System.out.println(10 + 5 * 2).",
        solution: `public class Operacoes {
    public static void main(String[] args) {
        System.out.println(10 + 5 * 2);
    }
}`,
        template: `public class Operacoes {
    public static void main(String[] args) {
        // Calcule e imprima 10 + 5 * 2
        
    }
}`,
        expectedOutput: "20",
        concept: "Operadores",
        points: 60
    },
    {
        id: 4,
        title: "Condicionais - if/else",
        difficulty: "intermediario",
        objective: "Verifique se um número (use 15) é maior que 10. Se for, imprima 'Maior que 10', senão imprima 'Menor ou igual a 10'.",
        hint: "Use if (numero > 10) { ... } else { ... } para criar a condição.",
        solution: `public class Condicionais {
    public static void main(String[] args) {
        int numero = 15;
        if (numero > 10) {
            System.out.println("Maior que 10");
        } else {
            System.out.println("Menor ou igual a 10");
        }
    }
}`,
        template: `public class Condicionais {
    public static void main(String[] args) {
        int numero = 15;
        // Crie a condição if/else aqui
        
    }
}`,
        expectedOutput: "Maior que 10",
        concept: "Condicionais",
        points: 100
    },
    {
        id: 5,
        title: "Loops - for",
        difficulty: "intermediario",
        objective: "Use um loop for para imprimir os números de 1 a 5, um por linha.",
        hint: "Use for (int i = 1; i <= 5; i++) { System.out.println(i); }",
        solution: `public class Loops {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}`,
        template: `public class Loops {
    public static void main(String[] args) {
        // Crie o loop for aqui
        
    }
}`,
        expectedOutput: "1\n2\n3\n4\n5",
        concept: "Loops",
        points: 120
    },
    {
        id: 6,
        title: "Arrays",
        difficulty: "intermediario",
        objective: "Crie um array com os valores [1, 2, 3] e imprima o segundo elemento (índice 1).",
        hint: "Use int[] array = {1, 2, 3}; para criar o array e array[1] para acessar o segundo elemento.",
        solution: `public class Arrays {
    public static void main(String[] args) {
        int[] array = {1, 2, 3};
        System.out.println(array[1]);
    }
}`,
        template: `public class Arrays {
    public static void main(String[] args) {
        // Crie o array aqui
        
        // Imprima o segundo elemento aqui
        
    }
}`,
        expectedOutput: "2",
        concept: "Arrays",
        points: 110
    },
    {
        id: 7,
        title: "Métodos",
        difficulty: "intermediario",
        objective: "Crie um método chamado 'somar' que recebe dois números inteiros e retorna sua soma. Chame o método no main.",
        hint: "Use public static int somar(int a, int b) { return a + b; } para criar o método.",
        solution: `public class Metodos {
    public static int somar(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        int resultado = somar(5, 3);
        System.out.println(resultado);
    }
}`,
        template: `public class Metodos {
    // Crie o método somar aqui
    
    public static void main(String[] args) {
        // Chame o método somar aqui
        
    }
}`,
        expectedOutput: "8",
        concept: "Métodos",
        points: 150
    },
    {
        id: 8,
        title: "Loops Aninhados",
        difficulty: "avancado",
        objective: "Use loops aninhados para imprimir um padrão de asteriscos: 3 linhas, cada uma com 4 asteriscos.",
        hint: "Use dois loops for aninhados: um para as linhas e outro para os asteriscos em cada linha.",
        solution: `public class LoopsAninhados {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 4; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
        template: `public class LoopsAninhados {
    public static void main(String[] args) {
        // Crie os loops aninhados aqui
        
    }
}`,
        expectedOutput: "****\n****\n****",
        concept: "Loops Aninhados",
        points: 180
    },
    {
        id: 9,
        title: "Switch Case",
        difficulty: "intermediario",
        objective: "Use switch case para verificar o valor de uma variável 'dia' (use 3) e imprima 'Terça-feira'.",
        hint: "Use switch (dia) { case 3: System.out.println(\"Terça-feira\"); break; }",
        solution: `public class SwitchCase {
    public static void main(String[] args) {
        int dia = 3;
        switch (dia) {
            case 1:
                System.out.println("Segunda-feira");
                break;
            case 2:
                System.out.println("Segunda-feira");
                break;
            case 3:
                System.out.println("Terça-feira");
                break;
            default:
                System.out.println("Dia inválido");
        }
    }
}`,
        template: `public class SwitchCase {
    public static void main(String[] args) {
        int dia = 3;
        // Crie o switch case aqui
        
    }
}`,
        expectedOutput: "Terça-feira",
        concept: "Switch Case",
        points: 130
    },
    {
        id: 10,
        title: "Projeto Final",
        difficulty: "avancado",
        objective: "Crie um programa que calcula a média de 3 números (5, 10, 15) e imprime o resultado.",
        hint: "Some os três números e divida por 3. Use variáveis para armazenar os valores.",
        solution: `public class ProjetoFinal {
    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 10;
        int num3 = 15;
        double media = (num1 + num2 + num3) / 3.0;
        System.out.println(media);
    }
}`,
        template: `public class ProjetoFinal {
    public static void main(String[] args) {
        // Declare as variáveis com os valores 5, 10, 15
        
        // Calcule a média
        
        // Imprima o resultado
        
    }
}`,
        expectedOutput: "10.0",
        concept: "Projeto Final",
        points: 200
    }
];

// Sistema de dicas do chat
const chatResponses = {
    "sintaxe": "A sintaxe Java segue regras específicas: use ponto e vírgula (;) no final das instruções, chaves {} para blocos de código, e parênteses () para métodos.",
    "variaveis": "Variáveis em Java devem ser declaradas com um tipo (int, String, double, etc.) e podem ser inicializadas na mesma linha: int idade = 25;",
    "loops": "Loops permitem repetir código. O for é ideal quando você sabe quantas vezes repetir: for (int i = 0; i < 10; i++)",
    "condicionais": "Use if/else para tomar decisões no código. A condição deve estar entre parênteses: if (condicao) { ... }",
    "metodos": "Métodos são blocos de código reutilizáveis. Use 'public static' para métodos que podem ser chamados diretamente.",
    "arrays": "Arrays armazenam múltiplos valores. Declare com int[] nome = {valor1, valor2}; e acesse com nome[índice]",
    "erro": "Se você está com erro, verifique: 1) Ponto e vírgula no final das linhas, 2) Chaves balanceadas, 3) Parênteses corretos",
    "ajuda": "Posso ajudar com: sintaxe, variáveis, loops, condicionais, métodos, arrays, ou qualquer dúvida específica!",
    "default": "Não entendi sua pergunta. Tente perguntar sobre: sintaxe, variáveis, loops, condicionais, métodos, arrays, ou digite 'ajuda' para ver opções."
};

// Inicialização do jogo
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    setupEventListeners();
    updateUI();
});

function initializeGame() {
    gameState.startTime = Date.now();
    gameState.exerciseStartTime = Date.now();
    
    // Adicionar mensagem inicial no chat
    addChatMessage('bot', 'Olá! Sou seu assistente Java. Como posso ajudar?');
}

function setupEventListeners() {
    // Chat input
    const chatInput = document.getElementById('chatInput');
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Code editor
    const codeEditor = document.getElementById('codeEditor');
    codeEditor.addEventListener('input', function() {
        // Real-time syntax highlighting could be added here
    });
}

// Funções de navegação do jogo
function startGame() {
    hideScreen('welcomeScreen');
    showScreen('exerciseScreen');
    loadExercise(0);
    gameState.exerciseStartTime = Date.now();
}

function nextExercise() {
    gameState.currentExercise++;
    
    if (gameState.currentExercise >= exercises.length) {
        showCompleteScreen();
    } else {
        hideScreen('successScreen');
        showScreen('exerciseScreen');
        loadExercise(gameState.currentExercise);
        gameState.exerciseStartTime = Date.now();
    }
}

function showCompleteScreen() {
    hideScreen('successScreen');
    showScreen('completeScreen');
    
    // Calcular estatísticas finais
    const totalTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('exercisesCompleted').textContent = `${exercises.length}/${exercises.length}`;
    document.getElementById('totalTime').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function restartGame() {
    // Reset game state
    gameState = {
        currentExercise: 0,
        score: 0,
        level: 1,
        streak: 0,
        startTime: Date.now(),
        exerciseStartTime: Date.now(),
        completedExercises: [],
        unlockedConcepts: [],
        achievements: [],
        chatHistory: []
    };
    
    hideScreen('completeScreen');
    showScreen('welcomeScreen');
    updateUI();
    
    // Reset chat
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '<div class="chat-message bot"><span class="message-avatar">🤖</span><span class="message-text">Olá! Sou seu assistente Java. Como posso ajudar?</span></div>';
}

// Funções de tela
function hideScreen(screenId) {
    document.getElementById(screenId).classList.add('hidden');
}

function showScreen(screenId) {
    document.getElementById(screenId).classList.remove('hidden');
}

// Carregar exercício
function loadExercise(exerciseIndex) {
    const exercise = exercises[exerciseIndex];
    
    // Atualizar interface
    document.getElementById('exerciseTitle').textContent = `Exercício ${exercise.id}: ${exercise.title}`;
    document.getElementById('exerciseObjective').textContent = exercise.objective;
    document.getElementById('exerciseHint').textContent = exercise.hint;
    document.getElementById('codeEditor').textContent = exercise.template;
    document.getElementById('difficultyBadge').textContent = exercise.difficulty;
    document.getElementById('difficultyBadge').className = `difficulty-badge ${exercise.difficulty}`;
    
    // Limpar saída
    document.getElementById('outputContent').innerHTML = '<p class="output-placeholder">Execute o código para ver a saída aqui...</p>';
    
    // Atualizar progresso
    updateProgress();
    
    // Atualizar conceitos
    updateConcepts();
}

// Executar código
function runCode() {
    const code = document.getElementById('codeEditor').textContent;
    const outputContent = document.getElementById('outputContent');
    
    // Simular execução do código Java
    try {
        const result = simulateJavaExecution(code);
        outputContent.innerHTML = `<p style="color: #4ade80;">${result}</p>`;
    } catch (error) {
        outputContent.innerHTML = `<p style="color: #ef4444;">Erro: ${error.message}</p>`;
    }
}

// Simular execução Java (versão simplificada)
function simulateJavaExecution(code) {
    // Esta é uma simulação muito básica
    // Em um ambiente real, você usaria um compilador/interpretador Java
    
    if (code.includes('System.out.println("Olá, Mundo!")')) {
        return "Olá, Mundo!";
    }
    
    if (code.includes('System.out.println(idade)') && code.includes('int idade = 25')) {
        return "25";
    }
    
    if (code.includes('System.out.println(10 + 5 * 2)')) {
        return "20";
    }
    
    if (code.includes('System.out.println("Maior que 10")') && code.includes('if (numero > 10)')) {
        return "Maior que 10";
    }
    
    if (code.includes('for (int i = 1; i <= 5; i++)') && code.includes('System.out.println(i)')) {
        return "1\n2\n3\n4\n5";
    }
    
    if (code.includes('array[1]') && code.includes('int[] array = {1, 2, 3}')) {
        return "2";
    }
    
    if (code.includes('somar(5, 3)') && code.includes('return a + b')) {
        return "8";
    }
    
    if (code.includes('for (int i = 0; i < 3; i++)') && code.includes('for (int j = 0; j < 4; j++)') && code.includes('System.out.print("*")')) {
        return "****\n****\n****";
    }
    
    if (code.includes('case 3:') && code.includes('System.out.println("Terça-feira")')) {
        return "Terça-feira";
    }
    
    if (code.includes('double media = (num1 + num2 + num3) / 3.0') && code.includes('System.out.println(media)')) {
        return "10.0";
    }
    
    // Verificar se há System.out.println no código
    const printlnMatches = code.match(/System\.out\.println\([^)]+\)/g);
    if (printlnMatches) {
        // Extrair o conteúdo entre parênteses
        const content = printlnMatches[0].match(/System\.out\.println\(([^)]+)\)/)[1];
        if (content.startsWith('"') && content.endsWith('"')) {
            return content.slice(1, -1); // Remove aspas
        }
        return content;
    }
    
    return "Código executado com sucesso!";
}

// Verificar resposta
function checkAnswer() {
    const code = document.getElementById('codeEditor').textContent;
    const exercise = exercises[gameState.currentExercise];
    
    // Simular execução
    const result = simulateJavaExecution(code);
    
    if (result === exercise.expectedOutput) {
        showSuccessScreen();
    } else {
        showErrorFeedback();
    }
}

// Mostrar tela de sucesso
function showSuccessScreen() {
    const exercise = exercises[gameState.currentExercise];
    const exerciseTime = Math.floor((Date.now() - gameState.exerciseStartTime) / 1000);
    const minutes = Math.floor(exerciseTime / 60);
    const seconds = exerciseTime % 60;
    
    // Atualizar estatísticas
    gameState.score += exercise.points;
    gameState.streak++;
    gameState.completedExercises.push(exercise.id);
    
    if (!gameState.unlockedConcepts.includes(exercise.concept)) {
        gameState.unlockedConcepts.push(exercise.concept);
    }
    
    // Verificar conquistas
    checkAchievements();
    
    // Atualizar UI
    document.getElementById('pointsEarned').textContent = `+${exercise.points}`;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('streakCount').textContent = gameState.streak;
    
    hideScreen('exerciseScreen');
    showScreen('successScreen');
    updateUI();
}

// Mostrar feedback de erro
function showErrorFeedback() {
    const outputContent = document.getElementById('outputContent');
    outputContent.innerHTML = '<p style="color: #ef4444;">❌ Resposta incorreta. Tente novamente ou peça uma dica!</p>';
    
    // Reset streak
    gameState.streak = 0;
    updateUI();
}

// Sistema de dicas
function showHint() {
    const exercise = exercises[gameState.currentExercise];
    document.getElementById('hintContent').textContent = exercise.hint;
    showModal('hintModal');
}

function closeHint() {
    hideModal('hintModal');
}

// Sistema de solução
function showSolution() {
    const exercise = exercises[gameState.currentExercise];
    document.getElementById('solutionCode').textContent = exercise.solution;
    showModal('solutionModal');
}

function closeSolution() {
    hideModal('solutionModal');
}

// Reset código
function resetCode() {
    const exercise = exercises[gameState.currentExercise];
    document.getElementById('codeEditor').textContent = exercise.template;
    document.getElementById('outputContent').innerHTML = '<p class="output-placeholder">Execute o código para ver a saída aqui...</p>';
}

// Modais
function showModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// Chat system
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
        addChatMessage('user', message);
        chatInput.value = '';
        
        // Processar resposta
        setTimeout(() => {
            const response = processChatMessage(message);
            addChatMessage('bot', response);
        }, 1000);
    }
}

function addChatMessage(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    
    const avatar = sender === 'bot' ? '🤖' : '👤';
    messageDiv.innerHTML = `
        <span class="message-avatar">${avatar}</span>
        <span class="message-text">${message}</span>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Salvar no histórico
    gameState.chatHistory.push({ sender, message, timestamp: Date.now() });
}

function processChatMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar palavras-chave
    for (const [keyword, response] of Object.entries(chatResponses)) {
        if (lowerMessage.includes(keyword)) {
            return response;
        }
    }
    
    return chatResponses.default;
}

// Atualizar UI
function updateUI() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('level').textContent = gameState.level;
    document.getElementById('streak').textContent = gameState.streak;
    
    updateProgress();
    updateConcepts();
    updateAchievements();
}

function updateProgress() {
    const progress = ((gameState.currentExercise + 1) / exercises.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `Exercício ${gameState.currentExercise + 1} de ${exercises.length}`;
}

function updateConcepts() {
    const conceptsList = document.getElementById('conceptsList');
    const conceptItems = conceptsList.querySelectorAll('.concept-item');
    
    conceptItems.forEach((item, index) => {
        const conceptName = item.querySelector('.concept-name').textContent;
        
        if (gameState.unlockedConcepts.includes(conceptName)) {
            item.classList.remove('locked');
            item.classList.add('unlocked');
            item.querySelector('.concept-icon').textContent = '✅';
        } else {
            item.classList.remove('unlocked');
            item.classList.add('locked');
            item.querySelector('.concept-icon').textContent = '🔒';
        }
    });
}

function updateAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    const achievementItems = achievementsList.querySelectorAll('.achievement-item');
    
    achievementItems.forEach((item, index) => {
        const achievementName = item.querySelector('.achievement-name').textContent;
        
        if (gameState.achievements.includes(achievementName)) {
            item.classList.remove('locked');
            item.classList.add('unlocked');
            item.querySelector('.achievement-icon').textContent = '🏆';
        } else {
            item.classList.remove('unlocked');
            item.classList.add('locked');
            item.querySelector('.achievement-icon').textContent = '🔒';
        }
    });
}

// Sistema de conquistas
function checkAchievements() {
    // Primeiro Código
    if (gameState.completedExercises.length === 1 && !gameState.achievements.includes('Primeiro Código')) {
        gameState.achievements.push('Primeiro Código');
        showAchievementNotification('Primeiro Código', 'Você escreveu seu primeiro código Java!');
    }
    
    // Sem Erros
    if (gameState.streak >= 3 && !gameState.achievements.includes('Sem Erros')) {
        gameState.achievements.push('Sem Erros');
        showAchievementNotification('Sem Erros', '3 exercícios consecutivos sem erros!');
    }
    
    // Velocidade
    const exerciseTime = (Date.now() - gameState.exerciseStartTime) / 1000;
    if (exerciseTime < 60 && !gameState.achievements.includes('Velocidade')) {
        gameState.achievements.push('Velocidade');
        showAchievementNotification('Velocidade', 'Exercício completado em menos de 1 minuto!');
    }
}

function showAchievementNotification(title, description) {
    // Criar notificação de conquista
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-content">
            <span class="achievement-icon">🏆</span>
            <div class="achievement-text">
                <h4>${title}</h4>
                <p>${description}</p>
            </div>
        </div>
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border: 2px solid #f59e0b;
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        animation: slideInRight 0.5s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 5000);
}

// Funções de compartilhamento
function shareResults() {
    const text = `Acabei de completar o Java Quest! 🎉\nPontuação: ${gameState.score}\nExercícios: ${gameState.completedExercises.length}/${exercises.length}\n\nAprenda Java de forma divertida em: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Java Quest - Resultados',
            text: text
        });
    } else {
        // Fallback para copiar para clipboard
        navigator.clipboard.writeText(text).then(() => {
            alert('Resultados copiados para a área de transferência!');
        });
    }
}

// Adicionar estilos CSS para animações de notificação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .achievement-content {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .achievement-text h4 {
        margin: 0 0 5px 0;
        color: #92400e;
        font-size: 1.1rem;
    }
    
    .achievement-text p {
        margin: 0;
        color: #92400e;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);
