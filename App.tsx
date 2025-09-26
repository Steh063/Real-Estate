import { Card, CardContent } from "./components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion-simple";
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
      label: "Сокращение расходов отдела с сохранением показателей",
    },
  ];

  const roadmapSteps = [
    {
      title: "Аудит и диагностика (0–3 недели)",
      description: "Цель: понять текущую ситуацию и точки роста.",
      actions: [
        "Анализ текущей воронки (лиды → звонки → встречи → сделки)",
        "Проверка CRM (amoCRM/Bitrix24): корректность данных, воронка, аналитика",
        "Интервью с менеджерами → понимание их подхода и навыков",
        "Сбор обратной связи от клиентов (опросы/интервью): что ценят, что вызывает сомнения",
      ],
      tools: "CRM-отчёты, Customer Journey Map, интервью клиентов",
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
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #f0fdf4 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '60px 24px', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="responsive-text-large" style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #374151, #059669, #0d9488)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.2'
          }}>
            Руководитель отдела продаж, который доводит сделки до закрытия
          </h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#374151', 
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            10+ лет управления в сложных продажах | Прирост результатов до +50% | Формирование и развитие отдела
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={{ 
        padding: '60px 24px', 
        background: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #f0fdfa, #ffffff)', 
            border: '1px solid #a7f3d0',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'linear-gradient(135deg, #059669, #0d9488)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px'
              }}>
                <User size={20} color="white" />
              </div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#1f2937',
                margin: '0'
              }}>
                Обо мне
              </h2>
            </div>
            <p style={{ 
              fontSize: '1rem', 
              color: '#374151', 
              lineHeight: '1.6',
              margin: '0'
            }}>
              Меня зовут Павел, я — руководитель продаж, который умеет доводить сделки до результата.
              Более 10 лет я строил команды, закрывал сложные контракты и повышал продажи на 30–50%. 
              В недвижимости я сделаю то же самое для вашей компании.
            </p>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section style={{ 
        padding: '60px 24px', 
        background: 'linear-gradient(135deg, #f9fafb, #f0fdfa)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1f2937', 
              marginBottom: '16px'
            }}>
              Ключевые компетенции
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280' }}>
              Проверенные навыки для достижения результатов
            </p>
          </div>

          <div className="responsive-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '24px'
          }}>
            {competencies.map((competency, index) => (
              <div key={index} style={{ 
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: 'linear-gradient(135deg, #14b8a6, #059669)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <competency.icon size={24} color="white" />
                  </div>
                  <p style={{ 
                    color: '#374151', 
                    lineHeight: '1.5',
                    margin: '0',
                    flex: '1'
                  }}>
                    {competency.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section style={{ 
        padding: '60px 24px', 
        background: 'linear-gradient(135deg, #fafaf9, #f0fdfa)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1f2937', 
              marginBottom: '16px'
            }}>
              Почему именно я
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280' }}>
              Опыт, методологии и результаты
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
            gap: '32px'
          }}>
            <div style={{ 
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <Briefcase size={32} color="#059669" style={{ marginRight: '12px' }} />
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: '#1f2937',
                  margin: '0'
                }}>
                  Опыт руководства
                </h3>
              </div>
              <p style={{ 
                color: '#374151', 
                marginBottom: '16px',
                lineHeight: '1.5'
              }}>
                Руководил региональным офисом международной компании, сочетая продажи, управление и стратегию
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Target size={16} color="#059669" style={{ marginRight: '8px' }} />
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Перевыполнение планов до +50%
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <DollarSign size={16} color="#059669" style={{ marginRight: '8px' }} />
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Опыт ведения крупных сделок и проектов
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Trophy size={16} color="#059669" style={{ marginRight: '8px' }} />
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Сильные лидерские качества, формирование команд
                  </span>
                </div>
              </div>
            </div>

            <div style={{ 
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <GraduationCap size={32} color="#059669" style={{ marginRight: '12px' }} />
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: '#1f2937',
                  margin: '0'
                }}>
                  Методологии
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { title: "Strategic Selling® (Miller Heiman)", desc: "Управление сложными сделками и ключевыми клиентами" },
                  { title: "Conceptual Selling® (Miller Heiman)", desc: "Точное понимание потребностей клиентов" },
                  { title: "Franklin Covey: 7 Habits", desc: "Формирование командной культуры" },
                  { title: "Лидерство по принципам Franklin Covey", desc: "Вовлечённость, дисциплина, результат" }
                ].map((item, idx) => (
                  <div key={idx} style={{ 
                    padding: '12px', 
                    background: 'linear-gradient(135deg, #f0fdfa, #ecfdf5)',
                    border: '1px solid #a7f3d0',
                    borderRadius: '8px'
                  }}>
                    <p style={{ 
                      fontWeight: '500', 
                      color: '#1f2937',
                      margin: '0 0 4px 0'
                    }}>
                      {item.title}
                    </p>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: '#6b7280',
                      margin: '0'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={{ 
        padding: '60px 24px', 
        background: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1f2937', 
              marginBottom: '16px'
            }}>
              Результаты и достижения
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280' }}>
              Измеримые результаты моей работы
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '24px'
          }}>
            {achievements.map((achievement, index) => (
              <div key={index} style={{ 
                textAlign: 'center',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: 'linear-gradient(135deg, #10b981, #14b8a6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <achievement.icon size={32} color="white" />
                </div>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  color: '#059669', 
                  marginBottom: '8px'
                }}>
                  {achievement.value}
                </div>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '0.875rem', 
                  lineHeight: '1.4',
                  margin: '0'
                }}>
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section style={{ 
        padding: '60px 24px', 
        background: 'linear-gradient(135deg, #f0fdfa, #ecfdf5, #fafaf9)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1f2937', 
              marginBottom: '16px'
            }}>
              План на первые 6 месяцев
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280' }}>
              Пошаговая дорожная карта достижения результатов
            </p>
          </div>

          <Accordion type="single" collapsible>
            {roadmapSteps.map((step, index) => (
              <AccordionItem key={index} value={`step-${index}`}>
                <div style={{ 
                  background: '#ffffff',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <AccordionTrigger>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px', 
                      textAlign: 'left',
                      padding: '24px',
                      width: '100%'
                    }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        background: 'linear-gradient(135deg, #14b8a6, #059669)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '700'
                      }}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 style={{ 
                          fontWeight: '600', 
                          color: '#1f2937',
                          margin: '0 0 4px 0'
                        }}>
                          {step.title}
                        </h3>
                        <p style={{ 
                          fontSize: '0.875rem', 
                          color: '#6b7280', 
                          margin: '0'
                        }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div style={{ 
                      paddingTop: '16px',
                      paddingLeft: '24px',
                      paddingRight: '24px',
                      paddingBottom: '24px'
                    }}>
                      <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ 
                          fontWeight: '500', 
                          color: '#1f2937', 
                          marginBottom: '8px'
                        }}>
                          Действия:
                        </h4>
                        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                          {step.actions.map((action, actionIndex) => (
                            <li key={actionIndex} style={{ 
                              display: 'flex', 
                              alignItems: 'flex-start',
                              marginBottom: '4px'
                            }}>
                              <CheckCircle size={16} color="#059669" style={{ 
                                marginRight: '8px', 
                                marginTop: '2px',
                                flexShrink: '0'
                              }} />
                              <span style={{ 
                                color: '#6b7280', 
                                fontSize: '0.875rem'
                              }}>
                                {action}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                        gap: '16px'
                      }}>
                        <div style={{ 
                          padding: '12px', 
                          background: 'linear-gradient(135deg, #f0fdfa, #ecfdf5)',
                          border: '1px solid #a7f3d0',
                          borderRadius: '8px'
                        }}>
                          <h4 style={{ 
                            fontWeight: '500', 
                            color: '#1f2937', 
                            margin: '0 0 4px 0'
                          }}>
                            Инструменты:
                          </h4>
                          <p style={{ 
                            fontSize: '0.875rem', 
                            color: '#6b7280',
                            margin: '0'
                          }}>
                            {step.tools}
                          </p>
                        </div>
                        <div style={{ 
                          padding: '12px', 
                          background: 'linear-gradient(135deg, #ecfdf5, #f0fdf4)',
                          border: '1px solid #bbf7d0',
                          borderRadius: '8px'
                        }}>
                          <h4 style={{ 
                            fontWeight: '500', 
                            color: '#1f2937', 
                            margin: '0 0 4px 0'
                          }}>
                            KPI:
                          </h4>
                          <p style={{ 
                            fontSize: '0.875rem', 
                            color: '#6b7280',
                            margin: '0'
                          }}>
                            {step.kpi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        padding: '48px 24px', 
        background: 'linear-gradient(135deg, #1f2937, #065f46)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            marginBottom: '32px'
          }}>
            Контакты
          </h2>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '12px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '8px 12px',
              background: 'rgba(55, 65, 81, 0.8)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              borderRadius: '8px'
            }}>
              <MapPin size={16} color="#34d399" style={{ marginRight: '8px' }} />
              <span style={{ fontSize: '0.875rem' }}>Батуми, Грузия</span>
            </div>

            <a href="mailto:steshin.p@icloud.com" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '8px 12px',
              background: 'rgba(55, 65, 81, 0.8)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'white',
              transition: 'all 0.3s ease'
            }}>
              <Mail size={16} color="#34d399" style={{ marginRight: '8px' }} />
              <span style={{ fontSize: '0.875rem' }}>steshin.p@icloud.com</span>
            </a>

            <a href="https://t.me/steh063" target="_blank" rel="noopener noreferrer" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '8px 12px',
              background: 'rgba(55, 65, 81, 0.8)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'white',
              transition: 'all 0.3s ease'
            }}>
              <Send size={16} color="#34d399" style={{ marginRight: '8px' }} />
              <span style={{ fontSize: '0.875rem' }}>@steh063</span>
            </a>

            <a href="https://www.linkedin.com/in/pavel-steshin063/" target="_blank" rel="noopener noreferrer" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '8px 12px',
              background: 'rgba(55, 65, 81, 0.8)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'white',
              transition: 'all 0.3s ease'
            }}>
              <Linkedin size={16} color="#34d399" style={{ marginRight: '8px' }} />
              <span style={{ fontSize: '0.875rem' }}>pavelsteshin</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}