import { Card, CardContent } from "./components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  TrendingUp,
  Users,
  UserCheck,
  BarChart3,
  Settings,
  Rocket,
  Target,
  Briefcase,
  Trophy,
  GraduationCap,
  CheckCircle,
  Mail,
  Send,
  Linkedin,
  MapPin,
  User,
  Zap,
  DollarSign,
  Percent,
} from "lucide-react";

export default function App() {
  const competencies = [
    {
      icon: TrendingUp,
      title: "Управление стратегией продаж и KPI",
    },
    {
      icon: Users,
      title: "Подбор, обучение и мотивация команды",
    },
    {
      icon: UserCheck,
      title: "Переговоры с топ-менеджерами и инвесторами",
    },
    {
      icon: BarChart3,
      title: "Аналитика рынка и конкурентной среды",
    },
    { icon: Settings, title: "Оптимизация процессов и CRM" },
    {
      icon: Rocket,
      title: "Стратегическое планирование и рост бизнеса",
    },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      value: "30-50%",
      label: "Перевыполнение планов продаж четыре года подряд",
    },
    {
      icon: Briefcase,
      value: "1 год",
      label: "Вывел региональный офис на прибыль с 0",
    },
    {
      icon: Percent,
      value: "14%",
      label: "Повысил конверсию сделок в два раза до 14%",
    },
    {
      icon: Zap,
      value: "25%",
      label:
        "Сокращение расходов отдела с сохранением показателей",
    },
  ];

  const roadmapSteps = [
    {
      title: "Аудит и диагностика (0–3 недели)",
      description:
        "Цель: понять текущую ситуацию и точки роста.",
      actions: [
        "Анализ текущей воронки (лиды → звонки → встречи → сделки)",
        "Проверка CRM (amoCRM/Bitrix24): корректность данных, воронка, аналитика",
        "Интервью с менеджерами → понимание их подхода и навыков",
        "Сбор обратной связи от клиентов (опросы/интервью): что ценят, что вызывает сомнения",
      ],
      tools:
        "CRM-отчёты, Customer Journey Map, интервью клиентов",
      kpi: "выявлено 3–5 ключевых барьеров для роста продаж",
    },
    {
      title:
        "Быстрые исправления и настройка процессов (3–6 недель)",
      description:
        "Цель: повысить конверсию за счёт клиентского подхода.",
      actions: [
        "Определение ключевой ценности продукта для клиента (цена, надёжность застройщика, доходность, комфорт)",
        "Разработка УТП для компании и объектов недвижимости",
        "Введение практики выявления страхов и возражений клиентов (потеря денег, сроки сдачи, юридическая чистота)",
        "Настройка CRM для фиксации этапов сделки и ключевых страхов клиента",
      ],
      tools:
        "Value Proposition Canvas, CRM-тэги, анкеты для клиентов",
      kpi: "рост конверсии звонок → встреча на 10–15%",
    },
    {
      title:
        "Формирование команды и культуры продаж (2–3 месяц)",
      description:
        "Цель: создать команду, которая понимает клиента и работает на результат.",
      actions: [
        "Набор 2–3 менеджеров по competency model",
        "Обучение: работа с ценностью, формирование доверия, выявление страхов клиента",
        "Разработка Playbook отдела продаж: ценностные аргументы, примеры УТП, кейсы с возражениями",
        "Введение системы мотивации (оклад + % + KPI, где KPI = не только сделки, но и качество коммуникации)",
      ],
      tools:
        "Playbook, Competency Matrix, тренинги по Value-based Sales",
      kpi: "новые менеджеры выходят на 70% плана за 2-й месяц",
    },
    {
      title: "Систематизация и масштабирование (4–5 месяц)",
      description:
        "Цель: превратить продажи в управляемую систему.",
      actions: [
        "Внедрение регулярных отчётов по ценности и возражениям клиентов",
        "Совместная работа с маркетингом для уточнения УТП",
        "Проведение тренингов: работа со страхами покупателей недвижимости, доверие и сервис",
        "Построение модели Value-Based Selling (каждый менеджер работает через ценность, а не через скрипт)",
      ],
      tools:
        "OKR, NPS (измерение доверия), Value Selling Framework",
      kpi: "выполнение командного плана продаж на 90–100%",
    },
    {
      title: "Стратегический рост (6 месяц)",
      description:
        "Цель: вывести отдел на уровень стратегического влияния.",
      actions: [
        "Сегментация рынка → создание разных УТП под разные сегменты (инвестор, семья, премиум-клиент)",
        "Совместно с юристами и маркетингом — формирование аргументов, снимающих основные страхи",
        "Участие в переговорах с ключевыми застройщиками",
        "Внедрение NPS и Customer Success практик для повторных сделок и рекомендаций",
      ],
      tools:
        "Customer Success Framework, NPS, Competitive Benchmarking",
      kpi: "рост выручки на 20–30%, прогнозируемая воронка на 3–6 месяцев",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative px-6 py-6 md:py-10 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1588662033047-09ffbf31376c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR1bWklMjBnZW9yZ2lhJTIwc2Vhc2lkZSUyMHJlYWwlMjBlc3RhdGV8ZW58MXx8fHwxNzU4ODgwNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Seaside real estate in Batumi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-emerald-50/90 to-teal-50/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-stone-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent leading-tight">
            Руководитель отдела продаж, который доводит сделки
            до закрытия
          </h1>
          <p className="mb-6 text-base text-stone-700 max-w-5xl mx-auto leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
            10+ лет управления в сложных продажах | Прирост
            результатов до +50% | Формирование и развитие отдела
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-12 left-10 w-14 h-14 bg-emerald-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-12 right-10 w-20 h-20 bg-stone-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section className="relative px-6 py-8 bg-white overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-25">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1748794517492-d1f3aa3de852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwbHV4dXJ5JTIwYXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4ODgwNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Coastal luxury apartments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-emerald-50/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <Card className="border border-emerald-100 shadow-xl bg-gradient-to-r from-emerald-50/95 to-white/95 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-stone-800">
                  Обо мне
                </h2>
              </div>
              <p className="text-base text-stone-700 leading-relaxed">
                Меня зовут Павел, я — руководитель продаж,
                который умеет доводить сделки до результата.
                Более 10 лет я строил команды, закрывал сложные
                контракты и повышал продажи на 30–50%. В
                недвижимости я сделаю то же самое для вашей
                компании.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="relative px-6 py-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1683041133509-aab050b20b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwbW91bnRhaW4lMjBncmVlbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTg4ODEwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Coastal green landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-emerald-50/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Ключевые компетенции
            </h2>
            <p className="text-stone-600">
              Проверенные навыки для достижения результатов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((competency, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-stone-100 shadow-lg hover:border-emerald-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <competency.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-stone-700 leading-relaxed">
                        {competency.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="relative px-6 py-12 bg-gradient-to-br from-stone-50 to-emerald-50 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-18">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758652389471-eb72fd914d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzaWRlJTIwcGViYmxlJTIwYmVhY2glMjByZXNvcnR8ZW58MXx8fHwxNzU4ODgwNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Seaside resort with pebble beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50/70 to-emerald-50/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Почему именно я
            </h2>
            <p className="text-stone-600">
              Опыт, методологии и результаты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-stone-100 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-stone-800">
                    Опыт руководства
                  </h3>
                </div>
                <p className="text-stone-700 mb-4">
                  Руководил региональным офисом международной
                  компании, сочетая продажи, управление и
                  стратегию
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-emerald-600 mr-2" />
                    <span className="text-sm text-stone-600">
                      Перевыполнение планов до +50%
                    </span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 text-emerald-600 mr-2" />
                    <span className="text-sm text-stone-600">
                      Опыт ведения крупных сделок и проектов
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 text-emerald-600 mr-2" />
                    <span className="text-sm text-stone-600">
                      Сильные лидерские качества, формирование
                      команд
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-stone-100 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-stone-800">
                    Методологии
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-lg">
                    <p className="font-medium text-stone-800">
                      Strategic Selling® (Miller Heiman)
                    </p>
                    <p className="text-sm text-stone-600">
                      Управление сложными сделками и ключевыми
                      клиентами
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-lg">
                    <p className="font-medium text-stone-800">
                      Conceptual Selling® (Miller Heiman)
                    </p>
                    <p className="text-sm text-stone-600">
                      Точное понимание потребностей клиентов
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-stone-50 to-slate-50 border border-stone-100 rounded-lg">
                    <p className="font-medium text-stone-800">
                      Franklin Covey: 7 Habits
                    </p>
                    <p className="text-sm text-stone-600">
                      Формирование командной культуры
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-lg">
                    <p className="font-medium text-stone-800">
                      Лидерство по принципам Franklin Covey
                    </p>
                    <p className="text-sm text-stone-600">
                      Вовлечённость, дисциплина, результат
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative px-6 py-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-18">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1617633823770-fe49d9068cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWJibGUlMjBiZWFjaCUyMHN0b25lcyUyMHRleHR1cmV8ZW58MXx8fHwxNzU4ODgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Pebble stones texture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-stone-50/85"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Результаты и достижения
            </h2>
            <p className="text-stone-600">
              Измеримые результаты моей работы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center border border-stone-100 shadow-xl hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group bg-white/90 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {achievement.value}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {achievement.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="px-6 py-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              План на первые 6 месяцев
            </h2>
            <p className="text-stone-600">
              Пошаговая дорожная карта достижения результатов
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {roadmapSteps.map((step, index) => (
              <AccordionItem
                key={index}
                value={`step-${index}`}
                className="border-0"
              >
                <Card className="shadow-lg border border-stone-200">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800">
                          {step.title}
                        </h3>
                        <p className="text-sm text-stone-600 mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4 mt-4">
                      <div>
                        <h4 className="font-medium text-stone-800 mb-2">
                          Действия:
                        </h4>
                        <ul className="space-y-1">
                          {step.actions.map(
                            (action, actionIndex) => (
                              <li
                                key={actionIndex}
                                className="flex items-start"
                              >
                                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-stone-600 text-sm">
                                  {action}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-lg">
                          <h4 className="font-medium text-stone-800 mb-1">
                            Инструменты:
                          </h4>
                          <p className="text-sm text-stone-600">
                            {step.tools}
                          </p>
                        </div>
                        <div className="p-3 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-lg">
                          <h4 className="font-medium text-stone-800 mb-1">
                            KPI:
                          </h4>
                          <p className="text-sm text-stone-600">
                            {step.kpi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative px-6 py-6 bg-stone-800 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1588662033047-09ffbf31376c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR1bWklMjBnZW9yZ2lhJTIwc2Vhc2lkZSUyMHJlYWwlMjBlc3RhdGV8ZW58MXx8fHwxNzU4ODgwNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Batumi evening skyline"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-stone-800/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-4">
            Контакты
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center px-3 py-2 bg-stone-700/80 border border-emerald-400/20 rounded-lg">
              <MapPin className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-white text-sm">
                Батуми, Грузия
              </span>
            </div>

            <a
              href="mailto:steshin.p@icloud.com"
              className="flex items-center px-3 py-2 bg-stone-700/80 border border-emerald-400/20 rounded-lg hover:bg-stone-600/80 hover:border-emerald-400/40 transition-colors duration-300"
            >
              <Mail className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-white text-sm">
                steshin.p@icloud.com
              </span>
            </a>

            <a
              href="https://t.me/steh063"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-stone-700/80 border border-emerald-400/20 rounded-lg hover:bg-stone-600/80 hover:border-emerald-400/40 transition-colors duration-300"
            >
              <Send className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-white text-sm">
                @steh063
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/pavel-steshin063/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-stone-700/80 border border-emerald-400/20 rounded-lg hover:bg-stone-600/80 hover:border-emerald-400/40 transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-white text-sm">
                pavelsteshin
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}