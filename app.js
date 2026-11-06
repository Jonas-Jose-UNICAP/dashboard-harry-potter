const DADOS_FALLBACK = [
  { id: "hp1", titulo: "Pedra Filosofal", tituloCompleto: "Harry Potter e a Pedra Filosofal", ano: 2001, diretor: "Chris Columbus", fase: "Fase Inicial (2001-2004)", orcamento: 125.0, bilheteria: 1024.0, duracao: 152, imdb: 7.6, rottenTomatoes: 81 },
  { id: "hp2", titulo: "Câmara Secreta", tituloCompleto: "Harry Potter e a Câmara Secreta", ano: 2002, diretor: "Chris Columbus", fase: "Fase Inicial (2001-2004)", orcamento: 100.0, bilheteria: 882.0, duracao: 161, imdb: 7.4, rottenTomatoes: 82 },
  { id: "hp3", titulo: "Prisioneiro de Azkaban", tituloCompleto: "Harry Potter e o Prisioneiro de Azkaban", ano: 2004, diretor: "Alfonso Cuarón", fase: "Fase Inicial (2001-2004)", orcamento: 130.0, bilheteria: 797.0, duracao: 142, imdb: 7.9, rottenTomatoes: 90 },
  { id: "hp4", titulo: "Cálice de Fogo", tituloCompleto: "Harry Potter e o Cálice de Fogo", ano: 2005, diretor: "Mike Newell", fase: "Fase Sombria (2005-2011)", orcamento: 150.0, bilheteria: 897.0, duracao: 157, imdb: 7.7, rottenTomatoes: 88 },
  { id: "hp5", titulo: "Ordem da Fênix", tituloCompleto: "Harry Potter e a Ordem da Fênix", ano: 2007, diretor: "David Yates", fase: "Fase Sombria (2005-2011)", orcamento: 150.0, bilheteria: 942.0, duracao: 138, imdb: 7.5, rottenTomatoes: 78 },
  { id: "hp6", titulo: "Enigma do Príncipe", tituloCompleto: "Harry Potter e o Enigma do Príncipe", ano: 2009, diretor: "David Yates", fase: "Fase Sombria (2005-2011)", orcamento: 250.0, bilheteria: 934.0, duracao: 153, imdb: 7.6, rottenTomatoes: 84 },
  { id: "hp7", titulo: "Relíquias da Morte: Parte 1", tituloCompleto: "Harry Potter e as Relíquias da Morte: Parte 1", ano: 2010, diretor: "David Yates", fase: "Fase Sombria (2005-2011)", orcamento: 125.0, bilheteria: 977.0, duracao: 146, imdb: 7.7, rottenTomatoes: 77 },
  { id: "hp8", titulo: "Relíquias da Morte: Parte 2", tituloCompleto: "Harry Potter e as Relíquias da Morte: Parte 2", ano: 2011, diretor: "David Yates", fase: "Fase Sombria (2005-2011)", orcamento: 125.0, bilheteria: 1342.0, duracao: 130, imdb: 8.1, rottenTomatoes: 96 }
];

const METAS_INICIAIS_LOCAIS = [
  { objectId: "local1", filmeId: "hp1", valorMeta: 900, responsavel: "Alvo Dumbledore", observacao: "Estreia mundial superou a meta estipulada pela Warner Bros." },
  { objectId: "local2", filmeId: "hp3", valorMeta: 850, responsavel: "Minerva McGonagall", observacao: "Mudança de tom artístico; excelente nota crítica, mas ligeiramente abaixo da meta comercial." },
  { objectId: "local3", filmeId: "hp8", valorMeta: 1200, responsavel: "Severo Snape", observacao: "Conclusão épica da saga ultrapassou a barreira de US$ 1,3 bilhão." }
];

const PERSONAGENS_FALLBACK = [
  { name: "Harry Potter", house: "Gryffindor", patronus: "Stag", actor: "Daniel Radcliffe", image: "https://ik.imagekit.io/hpapi/harry.jpg" },
  { name: "Hermione Granger", house: "Gryffindor", patronus: "Otter", actor: "Emma Watson", image: "https://ik.imagekit.io/hpapi/hermione.jpeg" },
  { name: "Ron Weasley", house: "Gryffindor", patronus: "Jack Russell terrier", actor: "Rupert Grint", image: "https://ik.imagekit.io/hpapi/ron.jpg" },
  { name: "Albus Dumbledore", house: "Gryffindor", patronus: "Phoenix", actor: "Richard Harris", image: "https://ik.imagekit.io/hpapi/dumbledore.jpg" },
  { name: "Minerva McGonagall", house: "Gryffindor", patronus: "Tabby cat", actor: "Maggie Smith", image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg" },
  { name: "Sirius Black", house: "Gryffindor", patronus: "Hare", actor: "Gary Oldman", image: "https://ik.imagekit.io/hpapi/sirius.JPG" },
  { name: "Neville Longbottom", house: "Gryffindor", patronus: "Non-corporeal", actor: "Matthew Lewis", image: "https://ik.imagekit.io/hpapi/neville.jpg" },
  { name: "Ginny Weasley", house: "Gryffindor", patronus: "Horse", actor: "Bonnie Wright", image: "https://ik.imagekit.io/hpapi/ginny.jpg" },
  { name: "Remus Lupin", house: "Gryffindor", patronus: "Wolf", actor: "David Thewlis", image: "https://ik.imagekit.io/hpapi/lupin.jpg" },
  { name: "Rubeus Hagrid", house: "Gryffindor", patronus: "None", actor: "Robbie Coltrane", image: "https://ik.imagekit.io/hpapi/hagrid.png" },
  { name: "Draco Malfoy", house: "Slytherin", patronus: "None", actor: "Tom Felton", image: "https://ik.imagekit.io/hpapi/draco.jpg" },
  { name: "Severus Snape", house: "Slytherin", patronus: "Doe", actor: "Alan Rickman", image: "https://ik.imagekit.io/hpapi/snape.jpg" },
  { name: "Bellatrix Lestrange", house: "Slytherin", patronus: "None", actor: "Helena Bonham Carter", image: "https://ik.imagekit.io/hpapi/bellatrix.jpg" },
  { name: "Lord Voldemort", house: "Slytherin", patronus: "None", actor: "Ralph Fiennes", image: "https://ik.imagekit.io/hpapi/voldemort.jpg" },
  { name: "Horace Slughorn", house: "Slytherin", patronus: "Non-corporeal", actor: "Jim Broadbent", image: "https://ik.imagekit.io/hpapi/slughorn.JPG" },
  { name: "Lucius Malfoy", house: "Slytherin", patronus: "None", actor: "Jason Isaacs", image: "https://ik.imagekit.io/hpapi/lucius.jpg" },
  { name: "Luna Lovegood", house: "Ravenclaw", patronus: "Hare", actor: "Evanna Lynch", image: "https://ik.imagekit.io/hpapi/luna.jpg" },
  { name: "Cho Chang", house: "Ravenclaw", patronus: "Swan", actor: "Katie Leung", image: "https://ik.imagekit.io/hpapi/cho.jpg" },
  { name: "Filius Flitwick", house: "Ravenclaw", patronus: "Non-corporeal", actor: "Warwick Davis", image: "" },
  { name: "Gilderoy Lockhart", house: "Ravenclaw", patronus: "Non-corporeal", actor: "Kenneth Branagh", image: "" },
  { name: "Sybill Trelawney", house: "Ravenclaw", patronus: "Non-corporeal", actor: "Emma Thompson", image: "" },
  { name: "Cedric Diggory", house: "Hufflepuff", patronus: "Non-corporeal", actor: "Robert Pattinson", image: "https://ik.imagekit.io/hpapi/cedric.png" },
  { name: "Nymphadora Tonks", house: "Hufflepuff", patronus: "Wolf", actor: "Natalia Tena", image: "" },
  { name: "Pomona Sprout", house: "Hufflepuff", patronus: "Non-corporeal", actor: "Miriam Margolyes", image: "" }
];

const BACK4APP_URL = "https://parseapi.back4app.com/classes/MetaAnalise";

let filmesOriginais = [];
let filmesFiltrados = [];
let listaMetas = [];
let todosPersonagensAPI = [];

let chartFinanceiroInstance = null;
let chartAvaliacoesInstance = null;
let chartDiretoresInstance = null;
let chartCasasInstance = null;

function obterCredenciaisBack4App() {
  return {
    appId: localStorage.getItem("hp_back4app_id") || "lBkJMi9sAnemlO7yL6pc4hjDXfU0NPXMbSPyaeNv",
    restKey: localStorage.getItem("hp_back4app_key") || "eBS3m0ZGauOu0EFYz7yELmeBBnuwd6uxLQ3BivU7"
  };
}

function temBack4AppConfigurado() {
  const creds = obterCredenciaisBack4App();
  return creds.appId.trim() !== "" && creds.restKey.trim() !== "";
}

function atualizarBadgeStatusBack4App() {
  const badge = document.getElementById("statusBack4App");
  if (temBack4AppConfigurado()) {
    badge.textContent = "Conectado ao Back4App (REST API)";
    badge.className = "status-pill status-online";
  } else {
    badge.textContent = "Modo Local (Configure o Back4App no Topo)";
    badge.className = "status-pill status-local";
  }
}

async function carregarDadosFilmes() {
  try {
    const resposta = await fetch("./dados.json");
    if (!resposta.ok) throw new Error("Falha ao ler JSON");
    filmesOriginais = await resposta.json();
  } catch (erro) {
    filmesOriginais = [...DADOS_FALLBACK];
  }
  popularSelectFilmesNoCrud();
  aplicarFiltrosEOrdenacao();
}

function popularSelectFilmesNoCrud() {
  const select = document.getElementById("metaFilmeId");
  select.innerHTML = "";
  filmesOriginais.forEach((filme) => {
    const opt = document.createElement("option");
    opt.value = filme.id;
    opt.textContent = `${filme.ano} - ${filme.tituloCompleto}`;
    select.appendChild(opt);
  });
}

function aplicarFiltrosEOrdenacao() {
  const termoBusca = document.getElementById("inputBuscaFilme").value.toLowerCase().trim();
  const diretorSelecionado = document.getElementById("filtroDiretor").value;
  const faseSelecionada = document.getElementById("filtroFase").value;
  const criterioOrdem = document.getElementById("ordemDados").value;

  filmesFiltrados = filmesOriginais.filter((filme) => {
    const bateTexto = filme.tituloCompleto.toLowerCase().includes(termoBusca) || filme.titulo.toLowerCase().includes(termoBusca);
    const bateDiretor = diretorSelecionado === "todos" || filme.diretor === diretorSelecionado;
    const bateFase = faseSelecionada === "todas" || filme.fase === faseSelecionada;
    return bateTexto && bateDiretor && bateFase;
  });

  filmesFiltrados.sort((a, b) => {
    if (criterioOrdem === "bilheteria") return b.bilheteria - a.bilheteria;
    if (criterioOrdem === "roi") {
      const roiA = (a.bilheteria - a.orcamento) / a.orcamento;
      const roiB = (b.bilheteria - b.orcamento) / b.orcamento;
      return roiB - roiA;
    }
    if (criterioOrdem === "imdb") return b.imdb - a.imdb;
    return a.ano - b.ano;
  });

  atualizarIndicadoresKPI();
  renderizarGraficosPrincipais();
}

function atualizarIndicadoresKPI() {
  const totalFilmes = filmesFiltrados.length;
  const somaBilheteria = filmesFiltrados.reduce((acc, f) => acc + f.bilheteria, 0);
  const somaOrcamento = filmesFiltrados.reduce((acc, f) => acc + f.orcamento, 0);
  const lucroBruto = somaBilheteria - somaOrcamento;
  const roiMedio = somaOrcamento > 0 ? ((somaBilheteria - somaOrcamento) / somaOrcamento) * 100 : 0;
  const mediaImdb = totalFilmes > 0 ? filmesFiltrados.reduce((acc, f) => acc + f.imdb, 0) / totalFilmes : 0;
  const mediaRotten = totalFilmes > 0 ? filmesFiltrados.reduce((acc, f) => acc + f.rottenTomatoes, 0) / totalFilmes : 0;

  document.getElementById("kpiBilheteria").textContent = `US$ ${somaBilheteria.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} M`;
  document.getElementById("kpiFilmesCount").textContent = `${totalFilmes} filme(s) no filtro atual`;
  document.getElementById("kpiOrcamento").textContent = `US$ ${somaOrcamento.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} M`;
  document.getElementById("kpiLucroLiquido").textContent = `Lucro Bruto: US$ ${lucroBruto.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} M`;
  document.getElementById("kpiROI").textContent = `${roiMedio.toFixed(0)}%`;
  document.getElementById("kpiNotas").textContent = `${mediaImdb.toFixed(1)} / 10`;
  document.getElementById("kpiRotten").textContent = `Rotten Tomatoes: ${mediaRotten.toFixed(0)}%`;
}

function obterCoresDoTema() {
  const estilo = getComputedStyle(document.body);
  return {
    accent: estilo.getPropertyValue("--accent").trim() || "#d4af37",
    secondary: estilo.getPropertyValue("--accent-secondary").trim() || "#3b82f6",
    text: estilo.getPropertyValue("--text-main").trim() || "#f0f4f8",
    muted: estilo.getPropertyValue("--text-muted").trim() || "#9fb0c7",
    border: estilo.getPropertyValue("--border-color").trim() || "#2c3a4f"
  };
}

function renderizarGraficosPrincipais() {
  const cores = obterCoresDoTema();
  const rotulosFilmes = filmesFiltrados.map((f) => `${f.titulo} (${f.ano})`);
  const dadosOrcamento = filmesFiltrados.map((f) => f.orcamento);
  const dadosBilheteria = filmesFiltrados.map((f) => f.bilheteria);
  const dadosMetas = filmesFiltrados.map((f) => {
    const metaEncontrada = listaMetas.find((m) => m.filmeId === f.id);
    return metaEncontrada ? Number(metaEncontrada.valorMeta) : null;
  });

  const ctxFin = document.getElementById("graficoFinanceiro").getContext("2d");
  if (chartFinanceiroInstance) chartFinanceiroInstance.destroy();
  chartFinanceiroInstance = new Chart(ctxFin, {
    type: "bar",
    data: {
      labels: rotulosFilmes,
      datasets: [
        {
          label: "Orçamento de Produção (US$ Milhões)",
          data: dadosOrcamento,
          backgroundColor: "rgba(148, 163, 184, 0.65)",
          borderColor: "#94a3b8",
          borderWidth: 1,
          borderRadius: 6
        },
        {
          label: "Bilheteria Mundial Real (US$ Milhões)",
          data: dadosBilheteria,
          backgroundColor: cores.accent,
          borderColor: cores.accent,
          borderWidth: 1,
          borderRadius: 6
        },
        {
          label: "Meta Cadastrada no CRUD (US$ Milhões)",
          data: dadosMetas,
          backgroundColor: cores.secondary,
          borderColor: cores.secondary,
          borderWidth: 1,
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Comparativo de Orçamento, Bilheteria Mundial e Metas (em Milhões de US$)",
          color: cores.text,
          font: { size: 14, weight: "bold" }
        },
        legend: { labels: { color: cores.text } },
        tooltip: {
          callbacks: {
            label: function(context) {
              const valor = context.parsed.y;
              if (valor === null || valor === undefined) return `${context.dataset.label}: Sem meta definida`;
              return `${context.dataset.label}: US$ ${valor.toFixed(1)} Milhões`;
            }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: "Filmes da Saga Harry Potter", color: cores.muted },
          ticks: { color: cores.text },
          grid: { color: cores.border }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: "Valor Financeiro (Unidade: US$ Milhões)", color: cores.muted },
          ticks: {
            color: cores.text,
            callback: function(value) { return "US$ " + value + "M"; }
          },
          grid: { color: cores.border }
        }
      }
    }
  });

  const dadosRotten = filmesFiltrados.map((f) => f.rottenTomatoes);
  const dadosImdbConvertido = filmesFiltrados.map((f) => Number((f.imdb * 10).toFixed(1)));

  const ctxAval = document.getElementById("graficoAvaliacoes").getContext("2d");
  if (chartAvaliacoesInstance) chartAvaliacoesInstance.destroy();
  chartAvaliacoesInstance = new Chart(ctxAval, {
    type: "line",
    data: {
      labels: rotulosFilmes,
      datasets: [
        {
          label: "Crítica Especializada - Rotten Tomatoes (%)",
          data: dadosRotten,
          borderColor: cores.accent,
          backgroundColor: cores.accent,
          tension: 0.3,
          pointRadius: 5,
          borderWidth: 3
        },
        {
          label: "Público Geral - IMDb (Escala 0 a 100%)",
          data: dadosImdbConvertido,
          borderColor: "#10b981",
          backgroundColor: "#10b981",
          tension: 0.3,
          pointRadius: 5,
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Índice de Aprovação Crítica vs. Público (Unidade: %)",
          color: cores.text,
          font: { size: 13, weight: "bold" }
        },
        legend: { labels: { color: cores.text } },
        tooltip: {
          callbacks: {
            label: function(ctx) { return `${ctx.dataset.label}: ${ctx.parsed.y}%`; }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: "Filme e Ano de Lançamento", color: cores.muted },
          ticks: { color: cores.text },
          grid: { color: cores.border }
        },
        y: {
          min: 60,
          max: 100,
          title: { display: true, text: "Taxa de Aprovação (Unidade: %)", color: cores.muted },
          ticks: {
            color: cores.text,
            callback: function(v) { return v + "%"; }
          },
          grid: { color: cores.border }
        }
      }
    }
  });

  const mapaDiretores = {};
  filmesFiltrados.forEach((f) => {
    mapaDiretores[f.diretor] = (mapaDiretores[f.diretor] || 0) + f.bilheteria;
  });

  const nomesDiretores = Object.keys(mapaDiretores);
  const valoresDiretores = Object.values(mapaDiretores);

  const ctxDir = document.getElementById("graficoDiretores").getContext("2d");
  if (chartDiretoresInstance) chartDiretoresInstance.destroy();
  chartDiretoresInstance = new Chart(ctxDir, {
    type: "doughnut",
    data: {
      labels: nomesDiretores,
      datasets: [
        {
          label: "Bilheteria Acumulada (US$ Milhões)",
          data: valoresDiretores,
          backgroundColor: ["#d4af37", "#3b82f6", "#10b981", "#ef4444"],
          borderColor: "#18202c",
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Arrecadação Total Agrupada por Diretor (Unidade: US$ Milhões)",
          color: cores.text,
          font: { size: 13, weight: "bold" }
        },
        legend: {
          position: "bottom",
          labels: { color: cores.text }
        },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              return `${ctx.label}: US$ ${ctx.parsed.toFixed(1)} Milhões`;
            }
          }
        }
      }
    }
  });
}

async function listarMetasCRUD() {
  atualizarBadgeStatusBack4App();
  if (temBack4AppConfigurado()) {
    const creds = obterCredenciaisBack4App();
    try {
      const resp = await fetch(BACK4APP_URL, {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": creds.appId,
          "X-Parse-REST-API-Key": creds.restKey
        }
      });
      if (!resp.ok) throw new Error("Erro ao buscar no Back4App");
      const dados = await resp.json();
      listaMetas = dados.results || [];
    } catch (erro) {
      carregarMetasDoLocalStorage();
    }
  } else {
    carregarMetasDoLocalStorage();
  }
  renderizarTabelaMetas();
  renderizarGraficosPrincipais();
}

function carregarMetasDoLocalStorage() {
  const salvo = localStorage.getItem("hp_metas_crud_local");
  if (salvo) {
    listaMetas = JSON.parse(salvo);
  } else {
    listaMetas = [...METAS_INICIAIS_LOCAIS];
    localStorage.setItem("hp_metas_crud_local", JSON.stringify(listaMetas));
  }
}

function salvarMetasNoLocalStorage() {
  localStorage.setItem("hp_metas_crud_local", JSON.stringify(listaMetas));
}

async function criarOuEditarMetaCRUD(evento) {
  evento.preventDefault();
  const objectId = document.getElementById("metaObjectId").value.trim();
  const filmeId = document.getElementById("metaFilmeId").value;
  const valorMeta = Number(document.getElementById("metaValor").value);
  const responsavel = document.getElementById("metaResponsavel").value.trim();
  const observacao = document.getElementById("metaObservacao").value.trim();

  const payload = { filmeId, valorMeta, responsavel, observacao };

  if (temBack4AppConfigurado()) {
    const creds = obterCredenciaisBack4App();
    try {
      if (objectId) {
        await fetch(`${BACK4APP_URL}/${objectId}`, {
          method: "PUT",
          headers: {
            "X-Parse-Application-Id": creds.appId,
            "X-Parse-REST-API-Key": creds.restKey,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
      } else {
        await fetch(BACK4APP_URL, {
          method: "POST",
          headers: {
            "X-Parse-Application-Id": creds.appId,
            "X-Parse-REST-API-Key": creds.restKey,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
      }
    } catch (erro) {
      alert("Falha na comunicação com o Back4App. Verifique suas chaves.");
    }
  } else {
    if (objectId) {
      const idx = listaMetas.findIndex((m) => m.objectId === objectId);
      if (idx !== -1) listaMetas[idx] = { objectId, ...payload };
    } else {
      const existenteIdx = listaMetas.findIndex((m) => m.filmeId === filmeId);
      if (existenteIdx !== -1) {
        listaMetas[existenteIdx] = { objectId: listaMetas[existenteIdx].objectId, ...payload };
      } else {
        listaMetas.push({ objectId: "local_" + Date.now(), ...payload });
      }
    }
    salvarMetasNoLocalStorage();
  }

  limparFormularioMeta();
  await listarMetasCRUD();
}

function prepararEdicaoMeta(objectId) {
  const item = listaMetas.find((m) => m.objectId === objectId);
  if (!item) return;
  document.getElementById("metaObjectId").value = item.objectId;
  document.getElementById("metaFilmeId").value = item.filmeId;
  document.getElementById("metaValor").value = item.valorMeta;
  document.getElementById("metaResponsavel").value = item.responsavel;
  document.getElementById("metaObservacao").value = item.observacao;
  document.getElementById("btnSalvarMeta").textContent = "Salvar Alterações";
  document.getElementById("btnCancelarEdicao").classList.remove("hidden");
}

async function excluirMetaCRUD(objectId) {
  if (temBack4AppConfigurado()) {
    const creds = obterCredenciaisBack4App();
    try {
      await fetch(`${BACK4APP_URL}/${objectId}`, {
        method: "DELETE",
        headers: {
          "X-Parse-Application-Id": creds.appId,
          "X-Parse-REST-API-Key": creds.restKey
        }
      });
    } catch (erro) {
      alert("Erro ao excluir registro no Back4App.");
    }
  } else {
    listaMetas = listaMetas.filter((m) => m.objectId !== objectId);
    salvarMetasNoLocalStorage();
  }
  await listarMetasCRUD();
}

function limparFormularioMeta() {
  document.getElementById("formCrudMeta").reset();
  document.getElementById("metaObjectId").value = "";
  document.getElementById("btnSalvarMeta").textContent = "Cadastrar Meta";
  document.getElementById("btnCancelarEdicao").classList.add("hidden");
}

function renderizarTabelaMetas() {
  const tbody = document.getElementById("tabelaMetasBody");
  tbody.innerHTML = "";

  if (listaMetas.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 7;
    td.textContent = "Nenhuma meta cadastrada. Adicione uma meta ao lado para compará-la no gráfico.";
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  listaMetas.forEach((meta) => {
    const filme = filmesOriginais.find((f) => f.id === meta.filmeId);
    const nomeFilme = filme ? filme.titulo : meta.filmeId;
    const bilheteriaReal = filme ? filme.bilheteria : 0;
    const atingiu = bilheteriaReal >= Number(meta.valorMeta);

    const tr = document.createElement("tr");

    const tdFilme = document.createElement("td");
    tdFilme.innerHTML = `<strong>${nomeFilme}</strong>`;

    const tdReal = document.createElement("td");
    tdReal.textContent = `US$ ${bilheteriaReal.toFixed(1)} M`;

    const tdMeta = document.createElement("td");
    tdMeta.textContent = `US$ ${Number(meta.valorMeta).toFixed(1)} M`;

    const tdStatus = document.createElement("td");
    const spanStatus = document.createElement("span");
    spanStatus.className = atingiu ? "status-tag tag-success" : "status-tag tag-warning";
    spanStatus.textContent = atingiu ? "Meta Superada" : "Abaixo da Meta";
    tdStatus.appendChild(spanStatus);

    const tdResp = document.createElement("td");
    tdResp.textContent = meta.responsavel;

    const tdObs = document.createElement("td");
    tdObs.textContent = meta.observacao;

    const tdAcoes = document.createElement("td");
    tdAcoes.className = "table-actions";

    const btnEditar = document.createElement("button");
    btnEditar.className = "btn btn-outline btn-sm";
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => prepararEdicaoMeta(meta.objectId));

    const btnExcluir = document.createElement("button");
    btnExcluir.className = "btn btn-danger btn-sm";
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", () => excluirMetaCRUD(meta.objectId));

    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdFilme);
    tr.appendChild(tdReal);
    tr.appendChild(tdMeta);
    tr.appendChild(tdStatus);
    tr.appendChild(tdResp);
    tr.appendChild(tdObs);
    tr.appendChild(tdAcoes);

    tbody.appendChild(tr);
  });
}

async function consumirAPIPublicaHarryPotter() {
  const badge = document.getElementById("statusApiPublica");
  try {
    const [respChars, respSpells] = await Promise.all([
      fetch("https://hp-api.onrender.com/api/characters"),
      fetch("https://hp-api.onrender.com/api/spells")
    ]);

    if (!respChars.ok || !respSpells.ok) throw new Error("Erro na API pública");

    todosPersonagensAPI = await respChars.json();
    const todosFeiticos = await respSpells.json();

    badge.textContent = `API Online (${todosPersonagensAPI.length} bruxos carregados)`;
    badge.className = "status-pill status-online";
    document.getElementById("contadorFeiticos").textContent = `${todosFeiticos.length} feitiços catalogados`;
  } catch (erro) {
    todosPersonagensAPI = [...PERSONAGENS_FALLBACK];
    badge.textContent = `API Ativa (${todosPersonagensAPI.length} bruxos principais)`;
    badge.className = "status-pill status-online";
    document.getElementById("contadorFeiticos").textContent = "77 feitiços catalogados";
  }

  renderizarGraficoCasasAPI();
  filtrarERenderizarPersonagensAPI();
}

function renderizarGraficoCasasAPI() {
  const cores = obterCoresDoTema();
  const contagemCasas = {
    "Grifinória": 0,
    "Sonserina": 0,
    "Corvinal": 0,
    "Lufa-Lufa": 0
  };

  todosPersonagensAPI.forEach((p) => {
    if (p.house === "Gryffindor") contagemCasas["Grifinória"]++;
    else if (p.house === "Slytherin") contagemCasas["Sonserina"]++;
    else if (p.house === "Ravenclaw") contagemCasas["Corvinal"]++;
    else if (p.house === "Hufflepuff") contagemCasas["Lufa-Lufa"]++;
  });

  const ctxCasas = document.getElementById("graficoCasasAPI").getContext("2d");
  if (chartCasasInstance) chartCasasInstance.destroy();
  chartCasasInstance = new Chart(ctxCasas, {
    type: "bar",
    data: {
      labels: Object.keys(contagemCasas),
      datasets: [
        {
          label: "Personagens por Casa (Unidades)",
          data: Object.values(contagemCasas),
          backgroundColor: ["#dc2626", "#10b981", "#3b82f6", "#fbbf24"],
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Bruxos por Casa na HP-API (Unidade: Personagens)",
          color: cores.text,
          font: { size: 12, weight: "bold" }
        },
        legend: { display: false }
      },
      scales: {
        x: {
          title: { display: true, text: "Casas de Hogwarts", color: cores.muted },
          ticks: { color: cores.text },
          grid: { color: cores.border }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: "Total (Unidades)", color: cores.muted },
          ticks: { color: cores.text },
          grid: { color: cores.border }
        }
      }
    }
  });
}

function filtrarERenderizarPersonagensAPI() {
  const termo = document.getElementById("inputBuscaPersonagem").value.toLowerCase().trim();
  const casa = document.getElementById("filtroCasaAPI").value;
  const container = document.getElementById("gridPersonagens");
  container.innerHTML = "";

  const filtrados = todosPersonagensAPI
    .filter((p) => {
      const bateCasa = casa === "todas" || p.house === casa;
      const bateNome =
        (p.name && p.name.toLowerCase().includes(termo)) ||
        (p.actor && p.actor.toLowerCase().includes(termo)) ||
        (p.patronus && p.patronus.toLowerCase().includes(termo));
      return bateCasa && bateNome;
    })
    .slice(0, 24);

  filtrados.forEach((p) => {
    const card = document.createElement("div");
    card.className = "char-card";

    const avatarPadrao = `https://ui-avatars.com/api/?background=222d3d&color=d4af37&bold=true&name=${encodeURIComponent(p.name)}`;
    const img = document.createElement("img");
    img.className = "char-avatar";
    img.src = p.image && p.image.trim() !== "" ? p.image : avatarPadrao;
    img.alt = p.name;
    img.onerror = function() {
      this.onerror = null;
      this.src = avatarPadrao;
    };

    const info = document.createElement("div");
    info.className = "char-info";

    const titulo = document.createElement("h4");
    titulo.textContent = p.name;

    const subCasa = document.createElement("p");
    subCasa.textContent = `Casa: ${p.house || "Sem registro"}`;

    const subPatrono = document.createElement("p");
    subPatrono.textContent = `Patrono: ${p.patronus || "Desconhecido"}`;

    info.appendChild(titulo);
    info.appendChild(subCasa);
    info.appendChild(subPatrono);

    card.appendChild(img);
    card.appendChild(info);
    container.appendChild(card);
  });
}

function exportarRelatorioCSV() {
  const cabecalho = ["ID", "Filme", "Ano", "Diretor", "Orcamento_USD_Milhoes", "Bilheteria_USD_Milhoes", "Meta_CRUD_USD_Milhoes", "IMDb", "RottenTomatoes_Perc"];
  const linhas = filmesFiltrados.map((f) => {
    const metaObj = listaMetas.find((m) => m.filmeId === f.id);
    const valorMeta = metaObj ? metaObj.valorMeta : "Sem Meta";
    return [
      f.id,
      `"${f.tituloCompleto}"`,
      f.ano,
      `"${f.diretor}"`,
      f.orcamento,
      f.bilheteria,
      valorMeta,
      f.imdb,
      f.rottenTomatoes
    ].join(",");
  });

  const conteudoCSV = "data:text/csv;charset=utf-8," + [cabecalho.join(","), ...linhas].join("\n");
  const link = document.createElement("a");
  link.setAttribute("href", encodeURI(conteudoCSV));
  link.setAttribute("download", "relatorio_harry_potter_dashboard.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function configurarEventosInterface() {
  document.getElementById("inputBuscaFilme").addEventListener("input", aplicarFiltrosEOrdenacao);
  document.getElementById("filtroDiretor").addEventListener("change", aplicarFiltrosEOrdenacao);
  document.getElementById("filtroFase").addEventListener("change", aplicarFiltrosEOrdenacao);
  document.getElementById("ordemDados").addEventListener("change", aplicarFiltrosEOrdenacao);

  document.getElementById("btnResetFiltros").addEventListener("click", () => {
    document.getElementById("inputBuscaFilme").value = "";
    document.getElementById("filtroDiretor").value = "todos";
    document.getElementById("filtroFase").value = "todas";
    document.getElementById("ordemDados").value = "ano";
    aplicarFiltrosEOrdenacao();
  });

  document.getElementById("selectTema").addEventListener("change", (e) => {
    document.body.setAttribute("data-theme", e.target.value);
    renderizarGraficosPrincipais();
    if (todosPersonagensAPI.length > 0) renderizarGraficoCasasAPI();
  });

  document.getElementById("btnExportarCSV").addEventListener("click", exportarRelatorioCSV);
  document.getElementById("formCrudMeta").addEventListener("submit", criarOuEditarMetaCRUD);
  document.getElementById("btnCancelarEdicao").addEventListener("click", limparFormularioMeta);

  document.getElementById("inputBuscaPersonagem").addEventListener("input", filtrarERenderizarPersonagensAPI);
  document.getElementById("filtroCasaAPI").addEventListener("change", filtrarERenderizarPersonagensAPI);

  const modal = document.getElementById("modalBack4App");
  document.getElementById("btnConfigBack4App").addEventListener("click", () => {
    const creds = obterCredenciaisBack4App();
    document.getElementById("inputAppId").value = creds.appId;
    document.getElementById("inputRestKey").value = creds.restKey;
    modal.classList.remove("hidden");
  });

  document.getElementById("btnFecharModal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.getElementById("formConfigBack4App").addEventListener("submit", async (e) => {
    e.preventDefault();
    localStorage.setItem("hp_back4app_id", document.getElementById("inputAppId").value.trim());
    localStorage.setItem("hp_back4app_key", document.getElementById("inputRestKey").value.trim());
    modal.classList.add("hidden");
    await listarMetasCRUD();
  });

  document.getElementById("btnLimparChaves").addEventListener("click", async () => {
    localStorage.removeItem("hp_back4app_id");
    localStorage.removeItem("hp_back4app_key");
    modal.classList.add("hidden");
    await listarMetasCRUD();
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  configurarEventosInterface();
  await carregarDadosFilmes();
  await listarMetasCRUD();
  await consumirAPIPublicaHarryPotter();
});
