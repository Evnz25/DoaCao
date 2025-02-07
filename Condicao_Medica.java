public class Condicao_Medica {
    private idCondicao_Medica;
    private String ferimento;
    private String doenca;
    private String vacina;
    private String medicamentos;

    public Condicao_Medica(idCondicao_Medica String, String ferimento, String doenca, String vacina, String medicamentos){
        this.idCondicao_Medica = idCondicao_Medica;
        this.ferimento = ferimento;
        this.doenca = doenca;
        this.vacina = vacina;
        this.medicamentos = medicamentos;
    }

    public String getIdCondicao_Medica() { return idCondicao_Medica; }

    public void setFerimento(String ferimento) { this.ferimento = ferimento; }

    public String getFerimentos() {
        return ferimento;
    }

    public void setFerimentos(String ferimento) {
        this.ferimento = ferimento;
    }

    public String getDoenca() {
        return doenca;
    }

    public void setDoenca(String doenca) {
        this.doenca = doenca;
    }

    public String getVacina() {
        return vacina;
    }

    public void setVacina(String vacina) {
        this.vacina = vacina;
    }

    public String getMedicamentos() {
        return medicamentos;
    }

    public void setMedicamentos(String medicamentos) {
        this.medicamentos = medicamentos;
    }
}
